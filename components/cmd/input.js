"use client";

import { useEffect, useState } from "react";

// CMDs
import Header from "./header";
import { command } from "@/lib/utils";

const Output = ({ output, history, doneLoading }) => {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedLines(output.map((line) => ({ text: "", fullText: line })));
    }, 0);

    return () => clearTimeout(timer);
  }, [output]);

  useEffect(() => {
    let interval;
    const updateLines = () => {
      setDisplayedLines((prevLines) =>
        prevLines.map((line) =>
          line.text.length < line.fullText.length
            ? { ...line, text: line.fullText.slice(0, line.text.length + 1) }
            : line
        )
      );
    };

    if (displayedLines.some((line) => line.text !== line.fullText)) {
      interval = setInterval(updateLines, 0.1);
    } else if (displayedLines.some((line) => line.text === line.fullText)) {
      doneLoading();
    }

    return () => clearInterval(interval);
  }, [displayedLines]);

  useEffect(() => {
    scrollToBottom();
  }, [displayedLines]);

  const scrollToBottom = () => {
    const textarea = document.getElementById("command");
    if (textarea) {
      textarea.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-start py-2">
        <Header />
        <span className="dark:text-[#32cd32] [font-size:_clamp(10px,3vw,14px)]">
          {history}
        </span>
      </div>
      {displayedLines.map((line, index) => (
        <pre
          key={index}
          className="dark:text-[#32cd32] [font-size:_clamp(10px,3vw,14px)] md:pl-4 py-4"
          dangerouslySetInnerHTML={{ __html: line.text }}
        />
      ))}
    </div>
  );
};

const CommandPrompt = () => {
  const [cmd, setCmd] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCmd(event.target.value);
  };

  const handleClear = () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      setOutputs([]);
      setCmd("");
      setHistory([]);
      document.body.style.opacity = 1;
    }, 500);
  };

  const handleThemeChange = () => {
    document.body.style.opacity = 0;
    const output = command("theme");
    setTimeout(() => {
      setOutputs((prevOutputs) => [...prevOutputs, output]);
      setHistory([...history, "theme"]);
      setCmd("");
      document.body.classList.toggle("dark");
      document.body.style.opacity = 1;
    }, 500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (loading) return;

    // This handles your cmd input based on the cmd
    // You can make the function here or import it from lib/utils.js
    // Personally i separate the function to lib/utils.js
    if (cmd === "") {
      return;
    } else if (cmd === "clear" || cmd === "cls") {
      handleClear();
      return setLoading(false);
    } else if (cmd === "exit") {
      window.close();
      return setLoading(false);
    } else if (cmd === "theme") {
      handleThemeChange();
      return setLoading(false);
    } else {
      const output = command(cmd);
      setOutputs((prevOutputs) => [...prevOutputs, output]);
      setHistory([...history, cmd]);
      setCmd("");
    }
  };

  return (
    <div className="dark:text-[#32cd32] [font-size:_clamp(10px,3vw,14px)] w-full max-w-lg flex flex-col">
      <div className="flex flex-col w-full pt-6">
        {outputs.map((output, index) => (
          <Output
            key={index}
            output={output}
            history={history[index]}
            doneLoading={() => setLoading(false)}
          />
        ))}
      </div>
      <div className="w-0 h-0 opacity-0 block md:inline-block text-neon-purple text-neon-red text-neon-yellow text-neon-green text-neon-white text-neon-black" />
      <form className="flex py-2 items-start" onSubmit={handleSubmit}>
        <Header />
        <input
          className="bg-transparent border-0 outline-none cursor-text w-full dark:text-[#32cd32] resize-none"
          type="text"
          id="command"
          value={cmd}
          onChange={handleChange}
          autoFocus={true}
        />
      </form>
    </div>
  );
};

export default CommandPrompt;

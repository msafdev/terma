// Use this to customize the banner
// Get the banners ASCII from https://manytools.org/hacker-tools/ascii-banner
const Banner = () => {
  return (
    <>
      <pre className="w-full max-w-lg text-left [font-size:_clamp(8px,3vw,16px)] text-neon-black dark:text-neon-green leading-none">
        {`
 ███▄ ▄███▓  ██████  ▄▄▄        █████▒
 ▓██▒▀█▀ ██▒▒██    ▒ ▒████▄    ▓██   ▒ 
 ▓██    ▓██░░ ▓██▄   ▒██  ▀█▄  ▒████ ░ 
 ▒██    ▒██   ▒   ██▒░██▄▄▄▄██ ░▓█▒  ░ 
 ▒██▒   ░██▒▒██████▒▒ ▓█   ▓██▒░▒█░    
 ░ ▒░   ░  ░▒ ▒▓▒ ▒ ░ ▒▒   ▓▒█░ ▒ ░    
 ░  ░      ░░ ░▒  ░ ░  ▒   ▒▒ ░ ░      
 ░      ░   ░  ░  ░    ░   ▒    ░ ░    
        ░         ░        ░  ░        
        `
          // I split each chars and give them different color
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line.split("").map((char, index) =>
                char === "░" ? (
                  <span
                    key={index}
                    className="text-neon-red dark:text-neon-yellow"
                  >
                    ░
                  </span>
                ) : char === "▒" ? (
                  <span
                    key={index}
                    className="text-neon-black dark:text-neon-green"
                  >
                    ▒
                  </span>
                ) : (
                  char
                )
              )}
              {"\n"}
            </span>
          ))}
      </pre>
    </>
  );
};
export default Banner;

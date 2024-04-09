const Banner = () => {
  return (
    <>
      <pre className="w-full max-w-xl text-left [font-size:_clamp(8px,3vw,16px)]">
        {`
****     *****  /********       **      ********
/**/**  /**/**  /**//////      ****    /**/////
/**//**/** /**  /**           **//**   /**
/** //***  /**  /*********   **  //**  /********
/**  //*   /**  ////////**  ********** /**///// 
/**   /    /**         /** /**//////** /**     
/**        /**   ********  /**     /** /**     
//         //   ////////   //      //  //      
        `
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line.split("").map((char, index) =>
                char === "/" ? (
                  <span key={index} className="text-neon-red dark:text-neon-yellow">
                    /
                  </span>
                ) : char === "*" ? (
                  <span
                    key={index}
                    className="text-neon-black dark:text-neon-green"
                  >
                    *
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

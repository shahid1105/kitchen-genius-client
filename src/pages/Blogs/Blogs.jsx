const Blogs = () => {
  return (
    <div className="pt-24">
      <div>
        {/* <h1 className="banner">Blog</h1> */}
        <div className="mx-48">
          <h1 className="text-center mt-10 text-[#9ca2ea] text-4xl">
            Questions And Answers
          </h1>

          <div className="mt-10 ps-10">
            <h1 className="font-bold text-[#6e79f2]">
              Q:1-When should you use context API?
            </h1>
            <p className="text-[gray]">
              when some data needs to be accessible by many components at
              different nesting levels. Apply it sparingly because it makes
              component reuse more difficult. If we only want to avoid passing
              some props through many levels, component composition is often a
              simpler solution than context.
            </p>
            <h1 className="font-bold mt-8 text-[#6e79f2]">
              Q:2-What is a custom hook?
            </h1>
            <p className="text-[gray]">
              A custom hook is a special JavaScript function whose name starts
              with and can be used to call other hooks. Let is take a look at
              some major differences between a custom React JS hook and React JS
              components: A custom hook does not require a specific signature.
            </p>
            <h1 className="font-bold mt-8 text-[#6e79f2]">
              Q:3-What is useRef?
            </h1>
            <p className="text-[gray]">
              useRef(initialValue) is a built-in React hook that accepts one
              argument as the initial value and returns a reference (aka ref). A
              reference is an object having a special property current
            </p>
            <h1 className="font-bold mt-8 text-[#6e79f2]">
              Q:4-What is useMemo?
            </h1>
            <p className="text-[gray]">
              useMemo() is a function that returns a memoized value of a passed
              in resource-intensive function. It is very useful in optimizing
              the performance of a React component by eliminating repeating
              heavy computations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

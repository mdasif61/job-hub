import React from "react";

const Blog = () => {

  return (
    <div className="grid md:mt-[220px] mt-10 md:w-8/12 mx-auto md:grid-cols-3 grid-cols-1 gap-5">
      <div className="border-2 rounded-xl p-5">
        <h1 className="text-3xl mb-4">
          <strong>01.when should you use to the contex api</strong>
        </h1>
        <p className="text-xl my-2">
          The React Context API can be used to provide state to multiple
          components far away in the component tree.
        </p>
      </div>
      <div className="border-2 rounded-xl p-5">
        <h1 className="text-3xl mb-4">
          <strong>02.What is Custom Hook</strong>
        </h1>
        <p className="text-xl my-2">
          A custom hook is a js function start name "use" and that may call
          other hook.When you have component logic that needs to be used by
          multiple components, we can extract that logic to a custom Hook.
        </p>
      </div>
      <div className="border-2 rounded-xl p-5">
        <h1 className="text-3xl mb-4">
          <strong>03.what is useRef and when to use useRef?</strong>
        </h1>
        <p className="text-xl my-2">
          It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import Info from "./components/Info";
import Previews from "./components/Previews";
import HeadlineTitle from "../../../components/Headline";
import { container, wrapper } from "./blogposts.module.scss";

function BlogPosts() {
  return (
    <div className={container}>
      <HeadlineTitle title="My Blogs" subtitle="Tips & Tricks" />

      <div className={wrapper}>
        <aside>
          <Info />
        </aside>

        <main>
          <Previews />
        </main>
      </div>
    </div>
  );
}

export default BlogPosts;

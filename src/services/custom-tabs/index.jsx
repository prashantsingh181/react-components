import Tabs from "./tabs";
import htmlLogo from "../../assets/htmlLogo.png";
import cssLogo from "../../assets/cssLogo.png";
import jsLogo from "../../assets/jsLogo.png";

function TopicContentComponent({ imageUrl, altText, content }) {
  return (
    <div className="flex flex-col gap-4 px-2 sm:px-6 py-6 text-lg">
      <img
        className="h-60 aspect-square self-center"
        src={imageUrl}
        alt={altText}
      />
      <div>{content}</div>
    </div>
  );
}

export default function TabParent() {
  const tabs = [
    {
      label: "HTML",
      content: (
        <TopicContentComponent
          imageUrl={htmlLogo}
          altText="html"
          content="It is used to design the web pages. With the help of HTML, you can create a complete website structure. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages and markup language defines the text document within the tag that define the structure of web pages."
        />
      ),
    },
    {
      label: "CSS",
      content: (
        <TopicContentComponent
          imageUrl={cssLogo}
          altText="css"
          content="CSS (Cascading Style Sheets) is used to styles web pages. Cascading Style Sheets are fondly referred to as CSS. The reason for using this is to simplify the process of making web pages presentable. It allows you to apply styles on web pages. More importantly, it enables you to do this independently of the HTML that makes up each web page."
        />
      ),
    },
    {
      label: "JS",
      content: (
        <TopicContentComponent
          imageUrl={jsLogo}
          altText="js"
          content="JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages. It allows us to add dynamic behaviour to the webpages"
        />
      ),
    },
  ];
  return <Tabs tabs={tabs} />;
}

import { useEffect } from "react";

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // 1. Update the tab title
    document.title = title
      ? `${title} | Thesis Universe`
      : "Thesis Universe | Academic Research & Dissertation Guidance";

    // 2. Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }

    // 3. Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // 4. Reset scroll position on route switch
  }, [title, description, keywords]);

  return null;
};

export default SEO;

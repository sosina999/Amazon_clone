import React from "react";

function FooterLinks(props) {
  let { linkTitle, linkName } = props;

  return (
    <div>
      <h3>{linkTitle}</h3>
      <ul>
        {linkName.map((item, i) => (
          <li key={i}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;

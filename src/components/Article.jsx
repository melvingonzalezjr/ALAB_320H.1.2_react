import React from 'react';

function Article({ date, title, image, imageAlt, description }) {
  return (
    <article>
      <time dateTime={date}>{date}</time>
      <h2>{title}</h2>
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
      <a href="">Continues ...</a>
    </article>
  );
}

export default Article;

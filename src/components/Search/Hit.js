import React from 'react';
import PostItem from "../PostItem";

const Hit = ({ hit }) => (
  <PostItem
    slug={`${hit.fields.slug}`}
    background={hit.background}
    title={hit.title}
    image={hit.image}
    date={hit.date}
    excerpt={hit.excerpt}
    category={hit.category}
  />
);

export default Hit;

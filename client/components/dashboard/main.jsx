import React from 'react';
import Card from './card';

const Main = (props) => {
  const { posts } = props;
  console.log(posts);

  const cardsArr = [];
  posts.forEach((elem) => {
    cardsArr.push(
      <Card
        key={elem._id}
        picUrl={elem.pic_url}
        category={elem.catagory}
        description={elem.description}
        likeCount={elem.likedCount}
        location={elem.location}
        locationName={elem.location_name}
      />
    );
  });
  return <div className='main'>{cardsArr}</div>;
};

export default Main;

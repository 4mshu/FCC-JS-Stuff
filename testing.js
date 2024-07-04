

const viewCount = (views) => {
  if (views >= 1000){
      return `${Math.floor(views/1000)}k`
  } else{
      return views;
  }
};

console.log(viewCount(1000))
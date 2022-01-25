# BFI 250 Progress Bar

Discover the greatest films of all time. Skip a few. Track your progress.

## Live Website

[www.bfi250.com](https://www.bfi250.com/)

## About This Project

Each decade since 1952, the British Film Institute's [Sight & Sound Magazine](https://en.wikipedia.org/wiki/Sight_%26_Sound) has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually 10 titles long, but in 2012 they put out a whopping [250 titles](https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/).

I created the BFI 250 Progress Bar as a way to track my progress through this list. Two important features for me:

- A button to "Skip" films I don't intend to see
- A visually simple progress bar
- Mobile-friendly

## :hammer_and_wrench: Technologies Used

- HTML
- CSS
- Javascript
- Bootstrap
- React
- Redux
- react-router-dom

## Status

As of January 2021, the front end is fairly mature, but it saves all data to local storage. I am now working on backend integration in order to allow authentication to preserve viewing status across devices.

## 🖥 Screenshots

## Demo Video

[![BFI 250 Progress Bar Video Demo](http://img.youtube.com/vi/07n1iiyvbys/0.jpg)](http://www.youtube.com/watch?v=07n1iiyvbys "Video Demo")

## Code Snippet (Movie Card Component)

```
const MovieCard = (props) => {
  let seenStatus = {};
  const pulledSeenStatus = useSelector((state) => state.seenStatus.seenStatus);
  if (pulledSeenStatus) {
    seenStatus = pulledSeenStatus;
  }
  let imdbLink = 'https://www.imdb.com/title/' + props.imdbID + '/';
  return (
    <div className='card card-group' style={{ width: '18rem' }}>
      <div className='poster'>
        <Badge seenStatus={seenStatus[props.imdbID]} />
        <a href={imdbLink} target='_blank' rel='noreferrer'>
          <img
            src={props.poster}
            style={{ height: '400px' }}
            className='card-img-top'
            alt={props.title}
          />
        </a>
        <div className='card-body align-self-end'>
          <div className='button-container view-status-buttons align-self-end'>
            <CardButtons
              seenStatus={seenStatus[props.imdbID]}
              id={props.imdbID}
            />
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          {props.bfiRank}. {props.title} ({props.year})
        </h5>
        <p className='card-text'>Director: {props.director}</p>
      </div>
    </div>
  );
};
```

MIT © Elijah Wilcott

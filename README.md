# react-node-flipper
React component for creating animations by flipping nodes (e.g. &lt;img>)

The main component is a **Flipper** function which takes a sequence of frame numbers, the delay between them in ms and a string specifying the type of loop ('forward', 'reverse', 'pingpong', 'random', 'none'). Omitted loop attribute is equal to 'none'.

```javascript
import {Flipper, ImgBook} from '@bitwkit/react-node-flipper';

function App() {
    return (
        <Flipper sequence={[/* array of frame numbers */]} delay={/* ms between frames */} loop=/* type of loop */>
            <ImgBook imgUrls={[/* array of URLs of pictures to be loaded as frames */]} />
        </Flipper>
    );
};
```
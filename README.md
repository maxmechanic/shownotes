shownotes
=========

A Node.js scraper/parser for podcast shownotes.

Installing via npm:

    npm install shownotes
  
#####Right now this only has listings for [5by5](http://5by5.tv/) but I would love to see it work with a wide variety of shows and networks. 

##Example

Right now there is only the get function, which returns the designated fields for a given podcast/networks.


```javascript

var Shownotes = require('shownotes');

var shownotes = new Shownotes();

shownotes.get('5by5', 'hypercritical', 99, function(notes) {
  console.log(notes);
  
  
// { title: 'New Siracusa County Bros. U',
//   description: 'John Siracusa and Dan Benjamin follow up on iTunes 11 and Apple\'s continuing failure to grok online services, then discuss the Wii U, starting with the painful setup process and continuing on to New Super Mario Bros. U, Nintendo Land, and, inevitably, the Wii U GamePad controller.',
//   sponsors: 'Sponsored by <a href="http://hover.com/dansentme">Hover</a> (use code DANSENTME for 10% off), <a href="http://shutterstock.com">Shutterstock</a> (use code DANSENTME12 for 30% off), and <a href="http://sourcebits.com">Sourcebits</a>.',
//   download: 'http://d.ahoy.co/redirect.mp3/fly.5by5.tv/audio/broadcasts/hypercritical/2012/hypercritical-099.mp3',
//   links: 
//    [ { title: 'Order of authors on publications - Academia Stack Exchange',
//        url: 'http://academia.stackexchange.com/questions/535/order-of-authors-on-publications/' },
//      { title: 'Does your brain really have the power to see the world upside-down?',
//        url: 'http://io9.com/5905180/does-your-brain-really-have-the-power-to-see-the-world-upside+down' },
//      { title: 'Dropbox: The Linchpin - Daring Fireball',
//        url: 'http://daringfireball.net/linked/2012/12/17/dropbox-linchpin' },
//      { title: 'Dropbox: The Linchpin - Michael Tsai',
//        url: 'http://mjtsai.com/blog/2012/12/17/dropbox-the-linchpin/' },
//      { title: 'How Nintendo DRM trapped $400 of downloaded games on my failing Wii - Ars Technica',
//        url: 'http://arstechnica.com/gaming/2012/11/how-nintendo-drm-trapped-400-of-downloaded-games-on-my-failing-wii/' },
//      { title: 'The long, frustrating road to recovering my Wii downloads - Ars Technica',
//        url: 'http://arstechnica.com/gaming/2012/12/the-long-frustrating-road-to-recovering-my-wii-downloads/' },
//      { title: 'The incredibly true story of how I bricked my Wii U - The PA Report',
//        url: 'http://penny-arcade.com/report/editorial-article/the-incredibly-true-story-of-how-i-bricked-my-wii-u' },
//      { title: 'Wii U GamePad battery compartment - iFixIt',
//        url: 'http://guide-images.ifixit.net/igi/MtqxV4ODmjKReJuY.large' },
//      { title: 'New Super Mario Bros. U - Amazon.com',
//        url: 'http://www.amazon.com/exec/obidos/ASIN/B002I0K3CK/5by5-20' },
//      { title: 'Wii U - Nintendo',
//        url: 'http://www.nintendo.com/wiiu' },
//      { title: 'Nintendo Land - Amazon.com',
//        url: 'http://www.amazon.com/exec/obidos/ASIN/B002I0K3M0/5by5-20' } ] }
});

```

###Scraping for shows

There's a function to assemble titles and paths for a given shows specific to 5by5 right now. Again, expanding by network it seems ideal to be able to check for a show if the current list is out-of-date. Right now the function is simply printing to console.
```javascript
 
shownotes.get5by5shows();
 
// { '5by5 specials': '/specials/',
//   amplified: '/amplified/',
//   'the b&b podcast': '/bb/',
//   'back to work': '/b2w/',
//   'build and analyze': '/buildanalyze/',
//   'the critical path': '/criticalpath/',
//   'the crossover': '/crossover/',
//   'founders talk': '/founderstalk/',
//   'the frequency': '/frequency/',
//   'high density': '/hd/',
//   hypercritical: '/hypercritical/',
//   'in beta': '/inbeta/',
//   'mac power users': '/mpu/',
//   'the news': '/news/',
//   'old tech news': '/otn/',
//   'on taking pictures': '/otp/',
//   'the pipeline': '/pipeline/',
//   'quit!': '/quit/',
//   systematic: '/systematic/',
//   'the big web show': '/bigwebshow/',
//   'content talks': '/contenttalks/',
//   'the web ahead': '/webahead/',
//   '5by5 at the movies': '/movies/',
//   'the comic shack': '/comicshack/',
//   'geek friday': '/geekfriday/',
//   'giant size': '/giantsize/',
//   'the ihnatko almanac': '/ia/',
//   'the incomparable': '/incomparable/',
//   'internet superhero': '/superhero/',
//   'latest in paleo': '/paleo/',
//   'the nickel': '/nickel/',
//   'screen time': '/screentime/',
//   'after dark': '/afterdark/' }
 ```

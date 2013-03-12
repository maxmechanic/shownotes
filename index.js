var $ = require('cheerio'),
	request = require('request');

var parsePage = {};

var networks = {
	//network: url
	'5by5': 'http://5by5.tv'
};

var shows = {

	'5by5': {
		'5by5 specials': '/specials/',
		'amplified': '/amplified/',
		'the b&b podcast': '/bb/',
		'back to work': '/b2w/',
		'build and analyze': '/buildanalyze/',
		'the critical path': '/criticalpath/',
		'the crossover': '/crossover/',
		'founders talk': '/founderstalk/',
		'the frequency': '/frequency/',
		'high density': '/hd/',
		'hypercritical': '/hypercritical/',
		'in beta': '/inbeta/',
		'mac power users': '/mpu/',
		'the news': '/news/',
		'old tech news': '/otn/',
		'on taking pictures': '/otp/',
		'the pipeline': '/pipeline/',
		'quit!': '/quit/',
		'systematic': '/systematic/',
		'the big web show': '/bigwebshow/',
		'content talks': '/contenttalks/',
		'the web ahead': '/webahead/',
		'5by5 at the movies': '/movies/',
		'the comic shack': '/comicshack/',
		'geek friday': '/geekfriday/',
		'giant size': '/giantsize/',
		'the ihnatko almanac': '/ia/',
		'the incomparable': '/incomparable/',
		'internet superhero': '/superhero/',
		'latest in paleo': '/paleo/',
		'the nickel': '/nickel/',
		'screen time': '/screentime/',
		'after dark': '/afterdark/'
	},
	'none': {}
	//show name: url
};


module.exports = Shownotes;

function Shownotes() {}

Shownotes.prototype.get = function (network, show, episode, cb) {
	var notes;
	var url = networks[network] + shows[network][show] + episode;

	request(url, function(err, res, body) {
		notes = parsePage[network](err, res, body);
		cb(notes);
	});

};

parsePage['5by5'] = function (err, res, body) {
	if (err) {
		return console.error(err);
	}

	var shownotesPage = {};

	var parsedHTML = $.load(body);
	shownotesPage['title'] = parsedHTML('h2', '#episode').text();
	shownotesPage['description'] = parsedHTML('p', '#episode').first().text();
	shownotesPage['sponsors'] = parsedHTML('p', '#sponsors').html();
	shownotesPage['download'] = parsedHTML('a', '.download_links').attr('href');

	shownotesPage['links'] = [];
	parsedHTML('a', '#episode_links').map(function(i, link) {
		shownotesPage['links'].push({
			title: $(link).text(),
			url: $(link).attr('href')
		});

	});

	return shownotesPage;

};

Shownotes.prototype.get5by5shows = function () {
	request(networks['5by5'], scrapeFor5by5Shows);
};

function scrapeFor5by5Shows (err, res, body) {
	if (err) {
		return console.error(err);
	}
	var shows = {};
	var parsedHTML = $.load(body);

	parsedHTML('a', '.broadcast_thumb').map(function(i, link) {
		shows[$(link).attr('title').toLowerCase()] = $(link).attr('href') + '/';

	});
}









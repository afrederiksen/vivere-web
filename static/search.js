// Add your javascript here

var searchItems = [
    {
      name: "Rock",
      results: [
        {
          title: "Chris Wong",
          description: "Dallas, TX",
		   "url": "./live/wong"
        },
        {
          title: "Rob Onato",
          description: "Boston, MA"
        }
      ]
    },
    {
      name: "Electronic",
      results: [
        {
          title: "Jimmy Fu",
          description: "Berkeley, CA",
		   "url": "./live/fu"
        },
                  {
          title: "The Economy",
          description: "Singapore, Singapore"
        }
      ]
    },
        {
      name: "Country",
      results: [
        {
          title: "Kim Canton",
          description: "New York, NY"
        }
      ]
    },
        {
      name: "Rap",
      results: [
        {
          title: "Jeb Kan",
          description: "London, United Kingdom"
        },
                  {
          title: "Frank Blanto",
          description: "Bridgeport, CT"
        }
      ]
    },
    {
      name: "Spanish",
      results: [
        {
          title: "Carlos Rodriquez",
          description: "Redmond, WA"
        }
      ]
    },
        {
      name: "Punk Rock",
      results: [
        {
          title: "Saturday's for the Boys",
          description: "Portland, ME"
        }
      ]
    },
    {
      name: "Classical",
      results: [
        {
          title: "Thomas Vantu",
          description: "Rome, Italy"
        }
      ]
    },
       {
      name: "African Tribal",
      results: [
        {
          title: "Adam Blanco",
          description: "Narobi, Kenya"
        }
      ]
    },
    {
      name: "Arabic",
      results: [
        {
          title: "Assef and Crew",
          description: "Redmond, WA"
        }
      ]
    }
];

$(function(){
  $('#searchInput').search({
    apiSettings: {
        'response': function (e) {
            var searchTerm = e.urlData.query;

            var result = searchItems.map(function (cat) { 
              
                var items = cat.results.filter(function (item) {
                  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
                });

                if(items !== null)
                {
                    var category = {'name' : cat.name};
                    category.results = items;
                    return category;
                }
            });    

            return {'results' : result };
        }
    },
    type: 'category'
  });
});// JavaScript Document
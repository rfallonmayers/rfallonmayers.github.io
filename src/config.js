function createPOI( geo_coords, input_title, description, on_chap_enter = [], on_chap_exit = [], zoom_cfg=15, bearing_cfg=-43.2 ) {
    let chapter = {
        id: input_title.replaceAll( " ", "-" ),
        alignment: 'left',
        hidden: false,
        title: input_title,
        image: './path/to/image/source.png',
        description: description,
        location: {
            center: geo_coords,
            zoom: zoom_cfg,
            pitch: 60,
            bearing: bearing_cfg
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: on_chap_enter,
        onChapterExit: on_chap_exit
    }
    return chapter;
}

const firstParaText = `According to participants, the Burrard Bridge bike lane infrastructure was one of the pivotal moments for cycling in the City of Vancouver. There had been a trial bike lane in 1996, which failed miserably. The media called this trial an enormous failure, with news stories calling it “Carmageddon” because there was a lot of car traffic, few cyclists, and angered residents. 
In 2005, Vision Vancouver was elected, and Greggor Robertson became Mayor. Greggor Robertson had a plan to implement cycling infrastructure on the Burrard Bridge, and this time, it was considered a success and became permanent. Logan, who was at the city, explained, “one great thing about engineering in Vancouver is they respond extremely well to political leadership. So they were given that space”. Adam, an advocate, explained the history of the Burrard Bridge and how important it was for Vision Vancouver to have a linchpin win at the beginning of their term. He stated:
“Vision started with Burrard bridge, which had previously been tried twice before now. And they ran into a lot of opposition doing it, but it's sort of a very key connector, and it was like the first bridge. So prior to that, you either biked with the vehicles or on a narrow, terrible sidewalk with people walking, or you went all the way around the peninsula and came in from the Eastside. So sort of like beyond a key connector. But on the other side, what I was gonna say is that sometimes perhaps you need to just start with sort of like small wins, especially if there's more opposition. Don't necessarily do the biggest thing or the most difficult thing. Not that you shouldn't do it, but maybe you can start with some easier and simpler wins that will get more support before you jump into something a bit trickier. But sometimes, maybe you just need to do the tricky thing. Cause that is kind of the key linchpin, and you can't really do anything without it”.

Pamela, who was with Vision, reflected on her time with the party and how much momentum the party had to achieve a big infrastructure ticket such as Burrard Bridge. She recalled:
“There was lots of talk at the time about adding bike lanes to Burrard bridge. By then, there had already been bicyclists and pedestrians sharing both sidewalks. And so if you were walking, it was a very narrow sidewalk for pedestrians and cyclists...So someone had already [been injured by a collision]…and so legally the city had to make changes to it. They could legally, now that they were responsible and could not allow that to continue…It was a hot topic, and the question was, will you take away vehicle lanes and add bicycle lanes to Burrard bridge? And Robertson said yes…so that became a thing and part of that momentum. So people who wanted bike lanes voted them in three times. And so, they built bike lanes. Cause that's what they promised”.

Ellis, an advocate, explained how pivotal the Burrard Bridge was for Vision Vancouver and how the future success of cycling infrastructure was at stake at the beginning of their first term. She stated:
“At that time, the issue was the Burrard bridge...it was kind of a pivotal moment in moving things forward. And I had been quite involved in trying to move the Burrard bridge forward and media events, things like that. And so I was there, and the one thing I said to them that I felt so strongly was if you guys do this, it's going to be beautiful. It's absolutely going to work because that was their main fear. That was a fiasco, like what had happened before. They were just so afraid because it was so politically fraught, it was such a big deal. And I just wanted to reassure them that from everything I could see, in everything I understood, this was going to be a huge success…When we tried it in the early days, it was a disaster...It was all about this extremely strong car lobby, which was essentially the general public. There wasn't a lot of the other story, whether it would have been climate change, whether it would have been livable cities, whether it would have been the benefits of getting around with active transportation. That wasn't part of the narrative at that time. So essentially, it was the bike lobby against everybody else almost. And so, for the municipal government to do something as iconic as reworking the Burrard bridge was just a huge statement. And they knew that it could easily really fly in their face if it didn't work well and potentially destroy future efforts for bike infrastructure”.

Nick, one of the city’s engineers at the time, reflected, “I just think back to...it was a huge project when we worked on the Burrard Bridge cycling infrastructure, and we rebuilt the entire intersection of Cornwall and Burrard, kind of the entry point to Kitts and Kitts point”. Sarah, one of the city councillors at the time, recalled the media frenzy prepared for the Burrard Street bike lane rollout to fail, as it did before. She remembered:
“We said we're going to do lean conversion and a reconfiguration of the bridge in stages. And we're going to do the opposite lane first. We're going to do the western, most southbound lane, the least busy one. And the compromise, which is a big compromise, was the pedestrians all had to be on the other side. So you separated them by pedestrians and bikes on different sides of the bridge. And that was baby steps. And the day we opened, I was the media victim on that one. I was the fattened calf. So I was in front of a scrum of people...There was a public feed to it. So we were watching during the rush hour CKNW had set up a booth on Pacific to interview people who were caught in the gridlock...Carmageddon and their helicopter circling...there was blood in the water, man. The sharks came around, and nothing happened, nothing happened. We were watching…Six o'clock rush hour and nothing happened. So the media tried desperately to just prove us wrong. The media was against us. The staff were stressed. Like we told the engineering staff, they were like, no, that's the wrong way. It's like, this is the lane we're going to do because we can sell this lane. We can sell this lane. We can't sell that lane. And the chief of engineering is so proud of that bridge today”. 

In time, the Burrard Bridge project had been a great success. The city “sold the lane” and ultimately sold the idea of cycling to many people and made it much easier to cycle through the area. Although the Burrard Street Bridge project has been a success, the City is unsure exactly how much success it is based on the data collected because there was no baseline data before the infrastructure change. Dan, at the city, explained:
“There are a lot of older projects where we don't have good baseline data, but we're getting better and better at that. So I would say, for example, Burrard Bridge, we have a lot of data to tell you a story about less sidewalk riding and huge increase in cycling and more diversity in types of people cycling, but we don't have the really good baseline data from when there was nothing. Our starting point is when we actually already started making improvements. So the really compelling story would be like 1995 to today”. 

Jay, a consultant, commented on the importance of collecting data at different points in the project to see the change in behaviour over time and having a third party evaluate over time. He stated: 
“I would say the largest issue was that they did the monitoring themselves...A third-party piece to be able to give that distance and give it a little bit more rigour and strength to that, which was also, I think, one reason that we get contacted for some of our stuff. Also, it protects decision-makers and the bureaucracy from some of the frustration you might hear”.

In essence, the Burrard Bridge is considered one of the first substantial political cycling infrastructure projects in the history of Vancouver. Vision Vancouver had been elected, and other groups were primed for the opportunities that came with the election. The momentum only kept building from this project onwards.

`;

const firstParaText = `The Hornby Street uni-directional bike lane going from the Burrard Bridge through downtown Vancouver was the next section of political cycling infrastructure. Logan, who was working for the city at the time, stated, “If Burrard bridge is a big deal for me, the next big deal would be pre-Hornby and post-Hornby...So post-Hornby is when we do transportation 2040”. Dan, at the city, explained the impetus for planning the Hornby bike lane and thinks it could have been designed better upon reflection.
“We put it on the one street over, and it’s really awkward to get to the Burrard bridge. You have to make this awkward turn, or at the other end, to get to the seawall, you have to make this awkward turn. And so it's actually a really complicated turn, and we've improved it. It was a safety hotspot, comfort hotspot that we've gone back and made it better, but we've introduced these weird kinks, and people are uncomfortable and don't know how to make the turn and just hop on the side block because it's like, what do I do here? So either they don't actually make it to the bridge cause they didn't know, or they end up on the sidewalk because of the way we designed it. And it goes all the way back to like, we picked the wrong one, but through design detail, you can kind of improve it. And so working now, we're kind of going in and making improvements, there's adjacent development, and we're leveraging the adjacent development to actually rethink that whole intersection”.

The Hornby bike lane was a pivotal moment at the time, mainly because it denoted a shift in the relationship between the Downtown Business Improvement Association, the City transportation planners and engineers, and Vancouver cycling advocates. At the beginning of this infrastructure plan, the DVBIA was opposed, and after it was installed, they had slowly changed their opinion of cycling infrastructure in their area. Mia, a cycling advocate, remembers the opposition at the time and the role of the BIA. The BIA changed their position and now have ongoing support for cycling. She recalled:
“The Hornby bike lane. That one went in, and the downtown business improvement association was completely against it. And they were, you know, it was going to decimate business, and a lot of them were claiming that it was really terrible. And then it happened, and it was fine or great, and they reversed their stance. Charles Gauthier is now generally in favour of any biking infrastructure downtown. He actually sponsors hub events, and, you know, he's done an about-face because of the experience of just being proved wrong. And I mean, I really respect him for that, you know, changing his opinion and being swayed by the facts”.

Nick, one of the engineers at the time, commented on the shift in the working relationship with the DVBIA and how their political support is integral to the planning process. He stated: 
“In Vancouver, we have business improvement areas or associations (BIAs), and it's been really fun to just see the total shift. Like downtown, Charles Gauthier is, he's a great guy to follow on Twitter, and he's just like a great person to work with. He represents, of course, the most important BIA in downtown. And ya, such a stark contrast to like 2011 when we started rolling out Hornby, which was a really controversial bike project and just you know, years after, data starts to roll in...the best thing we were looking at were like revenues for businesses to see if they've got up or down, turnover of lease spaces, things like that. It almost doesn't even matter anymore cause Charles and his team are just like, "this is the future," this is better cycling infrastructure downtown, with better public spaces...it’s totally the way to go, and it's catching on. It's just been one of the nice things cause they have a tremendous amount of political influence, and they represent often”.

Sarah, a previous councillor, explained how the Hornby project was a great success for the businesses in the area, and she thought from the data, she was onto something. She explained:
“Our Hornby bike lane report. I think it was one, or maybe two years after that, we spent a whole year doing this whole business survey just cause we had to do really well. And because we needed data and luckily we got the data we were looking for...There was a 98% increase in women on Hornby, putting the dividers was incredible. And we went from one to two, but, you know, but you started seeing newcomers also. That was to me a huge piece that I wanted to address with recent immigrants...And I saw more women with various versions of cargo bikes than men”. 

With the Burrard Bridge, Hornby bike lane, and the relationship with the DVBIA considered a success, the following projects became much more straightforward. The general public began to see more people cycling, more diversity amongst those cycling, and perhaps even tried cycling now that it was becoming safer in Vancouver.

`; 

var config = {
    //style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/rmayers2/ckrdsuoup0toz17oaiyp4fjuk?fresh=true',     
    accessToken: 'pk.eyJ1Ijoicm1heWVyczIiLCJhIjoiY2traXFlZ2h1MDZhaTJxcWE1aXRzdjZwbiJ9.ueBPJKAxZLRVVvLG_oWO2A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Vancouver Political Infrastructure Over Time',
    subtitle: 'Each site represents a section of cycling infrastructure or lack of infrastructure to denote the politics of the decision-making process',
    byline: 'Rebecca Fallon Mayers, School of Community and Regional Planning, University of British Columbia',
    footer: 'Source: source citations, etc.',
    chapters: [
        createPOI(
        	[-123.137186, 49.275323], 'Burrard Street Bridge', firstParaText, 
        	[ { layer: 'bikeways', opacity: 1.0 } ], [ { layer: 'building-extrusion', opacity: 0.3 } ] ),
        createPOI( 
        	[-123.137186, 49.275323], 'Burrard Street Crashes Involving Cyclists', 'INPUT TEXT HERE', 
        	[ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ), 
        createPOI( 
        	[-123.137186, 49.275323], 'Burrard Street Bike Racks', 'This layer represents the presence of bike racks in Vancouver and the density of bike racks at the location',  
        	[ { layer: 'bike-racks', opacity: 1.0 } ] ),
        createPOI( 
        	[-123.124980, 49.280540], 'Hornby Street', 'Continuing Politics and BIA Influence-INPUT TEXT HERE' ),
        createPOI(
        	[-123.124980, 49.280540], 'Hornby Street Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data' ,
 			[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
 		createPOI( 
        	[-123.103500, 49.277440], 'Dunsmuir Street', 'Connecting Downtown' ),
        createPOI( 
        	[-123.103500, 49.277440], 'Dunsmuir Street Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data' ,
        	[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
        createPOI( 
        	[-123.102270, 49.273454], 'Seaside Greenway', 'Park Board and City Unite' ),
        createPOI( 
        	[-123.102270, 49.273454], 'Seaside Greenway Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data' ,
        	[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
		createPOI(
        	[-123.185915, 49.272282], 'Point Grey Road', 'Connecting infrastructure along the seawall. An integral point of connection and the transportation department working with the park board. Neighbourhood was nervous that it would increase traffic to other streets. It raised the property values of the local area.' ),
        createPOI(
         	[-123.185915, 49.272282], 'Point Grey Road Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data',
         	[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
        createPOI( 
        	[-123.15295, 49.275723], 'Kitsilano Beach', 'Very Contentious Location', [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
        createPOI( 
        	[-123.15295, 49.275723], 'Kitsilano Beach Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data', 
        	[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
        createPOI(
        	[-123.069634, 49.269893], 'Commercial Drive', 'Old School Rules' ),
        createPOI(
        	[-123.069634, 49.269893], 'Commercial Drive Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data' ,
        	[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
        createPOI(
        	[-123.133, 49.272], 'Granville Bridge', 'Major project for safety over the bridge' ),
        createPOI( [-123.133, 49.272], 'Granville Bridge Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data',
        	[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] 	),
		createPOI(
			[-123.126745, 49.297189], 'Stanley Park Seawall', 'Pandemic Lane Re-allocation Approval and Disapproval' ),
		createPOI(
			[-123.126745, 49.297189], 'Stanley Park Seawall Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists at this location sourced from ICBC data',
			[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ] ),
		createPOI(
			[-123.1140, 49.2608], 'Vancouver', 'Here you can see Vancouvers bikeways and bike racks throughout the city', [], [], 11, 0 ),
		createPOI(
			[-123.1140, 49.2608], 'Vancouver Crashes Involving Cyclists', 'This layer represents the crashes involving cyclists across Vancouver sourced from ICBC data',
			[ { layer: 'bc-crashes-involving-cyclists', opacity: 1.0 } ], [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ],
			11, 0 )
		]
};

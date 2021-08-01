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
        	[-123.137186, 49.275323], 'Burrard Street Bridge', `According to participants, the Burrard Bridge bike lane infrastructure was one of the pivotal moments for cycling in the City of Vancouver. There had been a trial bike lane in 1996, which failed miserably. The media called this trial an enormous failure, with news stories calling it “Carmageddon” because there was a lot of car traffic, few cyclists, and angered residents. 
In 2005, Vision Vancouver was elected, and Greggor Robertson became Mayor. Greggor Robertson had a plan to implement cycling infrastructure on the Burrard Bridge, and this time, it was considered a success and became permanent. Logan, who was at the city, explained, “one great thing about engineering in Vancouver is they respond extremely well to political leadership. So they were given that space”. Adam, an advocate, explained the history of the Burrard Bridge and how important it was for Vision Vancouver to have a linchpin win at the beginning of their term. He stated:
`
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

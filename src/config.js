
class ChapterData {
    constructor( geo_coords, input_title, description ) {
        this.geo_coords = geo_coords;
        this.input_title = input_title;
        this.description = description;
        this.on_chap_enter = [];
        this.on_chap_exit = [];
        this.zoom_cfg = 15;
        this.bearing_cfg = -43.2;
        this.image_path = './path/to/image/source.png';
    }
}


function createPOI( chapter_data ) {
    let chapter = {
        id: chapter_data.input_title.replaceAll( " ", "-" ),
        alignment: 'left',
        hidden: false,
        title: chapter_data.input_title,
        image: chapter_data.image_path,
        description: chapter_data.description,
        location: {
            center: chapter_data.geo_coords,
            zoom: chapter_data.zoom_cfg,
            pitch: 60,
            bearing: chapter_data.bearing_cfg
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: chapter_data.on_chap_enter,
        onChapterExit: chapter_data.on_chap_exit
    }
    return chapter;
}

const firstParaText = `According to participants, the Burrard Bridge bike lane infrastructure was one of the pivotal moments for cycling in the City of Vancouver. There had been a trial bike lane in 1996, which failed miserably. The media called this trial an enormous failure, with news stories calling it “Carmageddon” because there was a lot of car traffic, few cyclists, and angered residents. 
In 2005, Vision Vancouver was elected, and Greggor Robertson became Mayor. Greggor Robertson had a plan to implement cycling infrastructure on the Burrard Bridge, and this time, it was considered a success and became permanent. Logan, who was at the city, explained, “one great thing about engineering in Vancouver is they respond extremely well to political leadership. So they were given that space”. Adam, an advocate, explained the history of the Burrard Bridge and how important it was for Vision Vancouver to have a linchpin win at the beginning of their term. He stated:
“Vision started with Burrard bridge, which had previously been tried twice before now. And they ran into a lot of opposition doing it, but it's sort of a very key connector, and it was like the first bridge. So prior to that, you either biked with the vehicles or on a narrow, terrible sidewalk with people walking, or you went all the way around the peninsula and came in from the Eastside. So sort of like beyond a key connector. But on the other side, what I was gonna say is that sometimes perhaps you need to just start with sort of like small wins, especially if there's more opposition. Don't necessarily do the biggest thing or the most difficult thing. Not that you shouldn't do it, but maybe you can start with some easier and simpler wins that will get more support before you jump into something a bit trickier. But sometimes, maybe you just need to do the tricky thing. Cause that is kind of the key linchpin, and you can't really do anything without it”. <br><br>

Pamela, who was with Vision, reflected on her time with the party and how much momentum the party had to achieve a big infrastructure ticket such as Burrard Bridge. She recalled:
“There was lots of talk at the time about adding bike lanes to Burrard bridge. By then, there had already been bicyclists and pedestrians sharing both sidewalks. And so if you were walking, it was a very narrow sidewalk for pedestrians and cyclists...So someone had already [been injured by a collision]…and so legally the city had to make changes to it. They could legally, now that they were responsible and could not allow that to continue…It was a hot topic, and the question was, will you take away vehicle lanes and add bicycle lanes to Burrard bridge? And Robertson said yes…so that became a thing and part of that momentum. So people who wanted bike lanes voted them in three times. And so, they built bike lanes. Cause that's what they promised”. <br><br>

Ellis, an advocate, explained how pivotal the Burrard Bridge was for Vision Vancouver and how the future success of cycling infrastructure was at stake at the beginning of their first term. She stated:
“At that time, the issue was the Burrard bridge...it was kind of a pivotal moment in moving things forward. And I had been quite involved in trying to move the Burrard bridge forward and media events, things like that. And so I was there, and the one thing I said to them that I felt so strongly was if you guys do this, it's going to be beautiful. It's absolutely going to work because that was their main fear. That was a fiasco, like what had happened before. They were just so afraid because it was so politically fraught, it was such a big deal. And I just wanted to reassure them that from everything I could see, in everything I understood, this was going to be a huge success…When we tried it in the early days, it was a disaster...It was all about this extremely strong car lobby, which was essentially the general public. There wasn't a lot of the other story, whether it would have been climate change, whether it would have been livable cities, whether it would have been the benefits of getting around with active transportation. That wasn't part of the narrative at that time. So essentially, it was the bike lobby against everybody else almost. And so, for the municipal government to do something as iconic as reworking the Burrard bridge was just a huge statement. And they knew that it could easily really fly in their face if it didn't work well and potentially destroy future efforts for bike infrastructure”.<br><br>

Nick, one of the city’s engineers at the time, reflected, “I just think back to...it was a huge project when we worked on the Burrard Bridge cycling infrastructure, and we rebuilt the entire intersection of Cornwall and Burrard, kind of the entry point to Kitts and Kitts point”. Sarah, one of the city councillors at the time, recalled the media frenzy prepared for the Burrard Street bike lane rollout to fail, as it did before. She remembered:
“We said we're going to do lean conversion and a reconfiguration of the bridge in stages. And we're going to do the opposite lane first. We're going to do the western, most southbound lane, the least busy one. And the compromise, which is a big compromise, was the pedestrians all had to be on the other side. So you separated them by pedestrians and bikes on different sides of the bridge. And that was baby steps. And the day we opened, I was the media victim on that one. I was the fattened calf. So I was in front of a scrum of people...There was a public feed to it. So we were watching during the rush hour CKNW had set up a booth on Pacific to interview people who were caught in the gridlock...Carmageddon and their helicopter circling...there was blood in the water, man. The sharks came around, and nothing happened, nothing happened. We were watching…Six o'clock rush hour and nothing happened. So the media tried desperately to just prove us wrong. The media was against us. The staff were stressed. Like we told the engineering staff, they were like, no, that's the wrong way. It's like, this is the lane we're going to do because we can sell this lane. We can sell this lane. We can't sell that lane. And the chief of engineering is so proud of that bridge today”. <br><br>

In time, the Burrard Bridge project had been a great success. The city “sold the lane” and ultimately sold the idea of cycling to many people and made it much easier to cycle through the area. Although the Burrard Street Bridge project has been a success, the City is unsure exactly how much success it is based on the data collected because there was no baseline data before the infrastructure change. Dan, at the city, explained:
“There are a lot of older projects where we don't have good baseline data, but we're getting better and better at that. So I would say, for example, Burrard Bridge, we have a lot of data to tell you a story about less sidewalk riding and huge increase in cycling and more diversity in types of people cycling, but we don't have the really good baseline data from when there was nothing. Our starting point is when we actually already started making improvements. So the really compelling story would be like 1995 to today”. 

Jay, a consultant, commented on the importance of collecting data at different points in the project to see the change in behaviour over time and having a third party evaluate over time. He stated: 
“I would say the largest issue was that they did the monitoring themselves...A third-party piece to be able to give that distance and give it a little bit more rigour and strength to that, which was also, I think, one reason that we get contacted for some of our stuff. Also, it protects decision-makers and the bureaucracy from some of the frustration you might hear”.<br><br>

In essence, the Burrard Bridge is considered one of the first substantial political cycling infrastructure projects in the history of Vancouver. Vision Vancouver had been elected, and other groups were primed for the opportunities that came with the election. The momentum only kept building from this project onwards.

`;

const secondParaText = `The Hornby Street uni-directional bike lane going from the Burrard Bridge through downtown Vancouver was the next section of political cycling infrastructure. Logan, who was working for the city at the time, stated, “If Burrard bridge is a big deal for me, the next big deal would be pre-Hornby and post-Hornby...So post-Hornby is when we do transportation 2040”. <br><br>
Dan, at the city, explained the impetus for planning the Hornby bike lane and thinks it could have been designed better upon reflection.
“We put it on the one street over, and it’s really awkward to get to the Burrard bridge. You have to make this awkward turn, or at the other end, to get to the seawall, you have to make this awkward turn. And so it's actually a really complicated turn, and we've improved it. It was a safety hotspot, comfort hotspot that we've gone back and made it better, but we've introduced these weird kinks, and people are uncomfortable and don't know how to make the turn and just hop on the side block because it's like, what do I do here? So either they don't actually make it to the bridge cause they didn't know, or they end up on the sidewalk because of the way we designed it. And it goes all the way back to like, we picked the wrong one, but through design detail, you can kind of improve it. And so working now, we're kind of going in and making improvements, there's adjacent development, and we're leveraging the adjacent development to actually rethink that whole intersection”.<br><br>

The Hornby bike lane was a pivotal moment at the time, mainly because it denoted a shift in the relationship between the Downtown Business Improvement Association, the City transportation planners and engineers, and Vancouver cycling advocates. At the beginning of this infrastructure plan, the DVBIA was opposed, and after it was installed, they had slowly changed their opinion of cycling infrastructure in their area. Mia, a cycling advocate, remembers the opposition at the time and the role of the BIA. The BIA changed their position and now have ongoing support for cycling. She recalled:
“The Hornby bike lane. That one went in, and the downtown business improvement association was completely against it. And they were, you know, it was going to decimate business, and a lot of them were claiming that it was really terrible. And then it happened, and it was fine or great, and they reversed their stance. Charles Gauthier is now generally in favour of any biking infrastructure downtown. He actually sponsors hub events, and, you know, he's done an about-face because of the experience of just being proved wrong. And I mean, I really respect him for that, you know, changing his opinion and being swayed by the facts”.<br><br>

Nick, one of the engineers at the time, commented on the shift in the working relationship with the DVBIA and how their political support is integral to the planning process. He stated: 
“In Vancouver, we have business improvement areas or associations (BIAs), and it's been really fun to just see the total shift. Like downtown, Charles Gauthier is, he's a great guy to follow on Twitter, and he's just like a great person to work with. He represents, of course, the most important BIA in downtown. And ya, such a stark contrast to like 2011 when we started rolling out Hornby, which was a really controversial bike project and just you know, years after, data starts to roll in...the best thing we were looking at were like revenues for businesses to see if they've got up or down, turnover of lease spaces, things like that. It almost doesn't even matter anymore cause Charles and his team are just like, "this is the future," this is better cycling infrastructure downtown, with better public spaces...it’s totally the way to go, and it's catching on. It's just been one of the nice things cause they have a tremendous amount of political influence, and they represent often”.<br><br>

Sarah, a previous councillor, explained how the Hornby project was a great success for the businesses in the area, and she thought from the data, she was onto something. She explained:
“Our Hornby bike lane report. I think it was one, or maybe two years after that, we spent a whole year doing this whole business survey just cause we had to do really well. And because we needed data and luckily we got the data we were looking for...There was a 98% increase in women on Hornby, putting the dividers was incredible. And we went from one to two, but, you know, but you started seeing newcomers also. That was to me a huge piece that I wanted to address with recent immigrants...And I saw more women with various versions of cargo bikes than men”. <br><br>

With the Burrard Bridge, Hornby bike lane, and the relationship with the DVBIA considered a success, the following projects became much more straightforward. The general public began to see more people cycling, more diversity amongst those cycling, and perhaps even tried cycling now that it was becoming safer in Vancouver.

`; 

const thirdParaText = `By the time the Dunsmuir project happened in 2010, the culture of transportation had shifted in Vancouver. From Logan’s perspective, who was working for the city at the time, the Dunsmuir project was “Pure pragmatic…It made sense. None of the bike networks worked until you connected it downtown”. <br><br>
Sarah, a previous councillor, discussed the radio show CKNW and the backlash she had gotten in years past. Yet, after Dunsmuir, there wasn’t as much backlash or complaints about the infrastructure. She elaborated:
“The last time I did an interview with Bill Good, it wasn't long before he retired...We had a chat, and I was on for a half-hour open line. And that's when the haters call...So nobody called in. One person called in on a totally different issue. And then somebody called in with a question for Bill that had nothing to do with me. Nobody called in to complain about Dunsmuir. And Bill said to me, things have changed. You've turned, you've turned the corner on this one. No, one's complaining”.<br><br>

That was when Sarah knew cycling in Vancouver was there to stay, and they had successfully shifted the culture of transportation if only a little bit. Once more residents started cycling, and it became a more popular mode of transportation and recreation, decision-makers wanted to make an ambitious plan for the future of transportation in Vancouver. The Transportation 2040 plan was approved by council shortly after in 2012, which paved the way for the following projects.<br><br>

`;

const fourthParaText = `The Seaside Greenway was approved by council in 2013. The Greenway, as explained by participants, is a prime example of the City engineers and planners working with the Park Board to plan, invest, engage the public, and implement a place to walk, bike, and roll. Some participants spoke about the contentious relationship the transportation department has with the Park Board in Vancouver, and these types of projects tend to get political quickly. This project was an example of the transportation department and Park Board working well together. Yet, this relationship changed once the infrastructure at Kitts Point was discussed. <br><br>
Ellis, an advocate who was working with both the Park Board and city transportation department at the time, recalled: 
“The park board connection, actually for me personally, started with a commitment to seeing that the whole Seaside Greenway improved from Olympic Village West. And so we were very involved in making sure that that stretch between the Cambie Bridge and Burrard Bridge happened. And I feel very proud of what happened there because I think we were catalysts, and we were certainly involved the whole way along. And we keep using that as an example where it was the city of Vancouver, residents, the various stakeholders, the Park Board, working together quite well and managed to create something that's fabulous and is working really well. And then I thought you could then transport that so that we're now going West of Burrard Bridge Kitts beach area, connecting with the new infrastructure...and then realizing, you know, that had become an area that nobody wanted to touch because of that mess that happened early as it was so nasty and so ugly. And then what I realized in working on that is that, in fact, it was much deeper. That whole thing I was telling you about the entrenched culture and the park board anti-bike”.<br><br>

Despite the culture of transportation and the perception of cycling in Vancouver becoming more positive, it was not the case everywhere or for everyone. The groups with the mechanisms of influence and power who did not want cycling infrastructure continued to express their opinions, and those opinions were taken seriously. 
`;

const fifthParaText = `After the success of the Burrard Bridge, Dunsmuir, and the Seaside Greenway, staff at the city figured that they would continue to extend the network from there and connect the infrastructure to the west end along the seawall. Dan, at the city, explained how this experience was very different than he had initially been. He recalled:
“[The transportation department and park board] had different management and different politics at the time, there was a push on like, Oh, this is really great. Let's strike while the iron is hot...and so we work with Park board staff to come up with a plan pretty quick. Like here's where our route could go. Let's understand where the active park uses are. And we don't want to ruin these spaces that are really cherished, and we don't want to cut down any trees...but also at the same time, we want to give people a nice experience through the park because that's part of the seawall delightful experience. And so we kind of came up with something quick, and we started doing some public engagement pretty quick, like onsite and got a lot of support...but then one of the residents and one of the more influential residents went out took like chalk like that white chalk for sports fields and like made up a path and then they put up all these signs. “The city's going to cut down on all these trees in the park and pave over the park. How can you do this for the sake of bikes that don't belong in the park, they belong on the streets”. And then, the media picked up on that and then people got scared and thought that's what we were doing, which we weren't. And then, and then one of the politicians responded like “we will not do that.” She didn't ask, Hey staff, what are you actually planning? She just looked at what the media was saying and what this public group was saying and said, well, I'll kill it. So...there has been no improvement since”.<br><br>

Ellis, a cycling advocate, explained how politically charged this area was. She explained:

“The Kitts area, which has been the battleground zero for us on all of this. And it was like, we will not be making any changes. We will be keeping bikes out of the park. And I just thought, wow, this is so bad. And this was after we'd sort of been working for quite a while to try to alter that narrative”.<br><br>

Pamela, who was with Vision at the time, explained how the Park Board was notorious for saying “people can bike to parks, but not through parks” to keep others safe in the parks. Mia, another advocate, explained how on the other hand, it is crucial to have cycling infrastructure in the Kitts area for the safety of families. Nonetheless, it was the NIMBYs who overtook the decision-making process. She commented:
“I don't even know what the motivation is with the Kitsilano bike lane. There's a small but very vocal group of people who live in Kitts who don't want anything to ever change. They don't ride bikes, I guess. And they don't care about, you know, people having to ride through parking lots and on busy streets with their children and so on as part of what should be a totally separated, like the seaside bikeway, the rest is right off the street. So it's great to ride on with family or, you know, someone using an adaptive cycle who's like lower to the ground or, you know? I mean there, yeah, that's basically it...The classic NIMBYs”.<br><br>
`;

const sixthParaText = `As an extension of the Seaside Greenway and making cycling and walking safer further west, the city did approve the cycling infrastructure along Point Grey Road, which is slightly further west than Kitts beach in 2017. Some participants thought that this connection to the Seaside Greenway would be very welcomed as the other sections of the Seaside Greenway were already working well, and residents were out enjoying the space. However, this project brought a lot of opposition, and the city staff had to go through many community engagement sessions and field comments from the public. Logan, who was at the city, recalled the politics changing within the Vision party. They were being much more strategic and calculated than before due to the amount of pushback they received. He stated:
“Vision had also been in now for whatever three, four years they were getting yelled at all the time. They were always a very pragmatic group. And so they really pulled back too. It's like, well, you know, normally we expect you to do the engagement...any party that's in for two years or three years is now looking at the next election, as opposed to when they first get in. And so they became much more hesitant...And Jerry [Dobrovolny...previous chief engineer and general manager of the engineering department at the City of Vancouver], who was always wonderful...and the mayor gets so many calls on traffic...And you see, now that the cycling infrastructure moves are strategic, there’s much more...They're careful. And that I think reflects the politics”.<br><br>

With Vision at the time, Pamela reflected on some of the details regarding the Point Grey Road section and residents' opinions based on the location of their properties. She elaborated:
“The Westside was never voting for vision anyway, so it was easy to put it there, but it was also much easier to put it there because there's no truck delivery routes. There's no industry, there's no, you know, there's no bus there, not very many bus routes. And then there were groups of privileged people that wanted the infrastructure there. For example, point grey road, people living on point grade road loved it. Quieter street. So the traffic calming at McDonald that didn't allow cars to go through or different one-way streets alternating. Their property values probably went up 25%. The people living around them, though on first Avenue, second Avenue, third Avenue, who thought that cars would be choosing their streets instead. Very opposed”.<br><br>

Although the fear of traffic was present on the adjacent streets, advocates were celebrating the cycling infrastructure. This presence is one of the ways that advocates show their support. After the infrastructure implementation, Will, a cycling advocate, explained how they made a call out to all the cyclists on their mailing list to come down to celebrate and argued that creating infrastructure for people induced demand for cycling in the area. He commented:
“We had a party when it was opened, and they hadn't put the final coat of paving down. Only half of it was paved. We just decided it was time for the grand opening. So we called it for that weekend because it was clear…3000 people rode it that first Saturday. And we just have a few people on a mailing list, but a bunch of them just came out because they understood it was close to finishing. There are no cars there now. And people ride it and say, I can't believe this. This is amazing. And everyone had fought that project on the basis that no one rides along the point grey road, you have to be nuts while it was narrow and fast and a racetrack. So they were all riding on third, which is the bike route, which is a quiet residential street where every block you had to stop to make sure nobody's going to drive in front of you. And you're out of sight and out of mind there. So no one rode there because it wasn't safe. And the cars weren't on third to see where all the bikes were. That's where they all came to. Induced demand isn't just about cars. Induced demand works for bikes too”.<br><br>

In some areas of Vancouver, the residents are less supportive of cycling infrastructure, and other groups such as businesses are more supportive as it draws attention and business. In other areas of the city, residents make up a large percent of the modal share, yet the businesses can be staunchly against cycling infrastructure. This conflict is also apparent in the next politically contentious cycling infrastructure project, Commercial Drive in East Vancouver.
`;

const seventhParaText = `Commercial drive is one of the locations in Vancouver that participants spoke of the most when discussing the politics of the cycling infrastructure decision-making process. Nick, a previous transportation engineer at the city, explained that the allocation of funding for sustainable transportation did not seem to matter when they attempted to make improvements to Commercial Drive because the business community was so opposed. He elaborated:
“It's a pretty massive amount of infrastructure money dedicated to transportation, like tens of millions of dollars. Ya, probably every year, I think we're at like 15-20 million we're going to try and spend on sustainable transportation projects. The informal manner we've taken is we identify a bunch of projects, some big ones we want to do, and we run with them. Commercial drive's a great example. It's been a neighbourhood that's been desperate to get better cycling infrastructure on the street, and every time we go back to the well, it just blows up. The business community loses their mind, starts to have an effect on parking and we kind of back off”. <br><br>

Logan, who was at the city, recognized this difference between the residents of the Commercial Drive area and the businesses that inhibit the development of sustainable transportation. He explained why the Commercial Drive area has been tough to redevelop. He stated:
“Vancouver took the car-free drive idea and evolved it and became open streets, which was Mount pleasant, Commercial or Main and Commercial and Granville and Commercial. Just didn't work. It was a shocker. We expected the opposite...if ever there was going to be a neighborhood that embraced that, it was going to be the commercial drive area. And it just didn't work. Didn't take. And I think the retail mix was different. It worked well on main, and it just didn't work on commercial and commercial still has those old school businesses”. 

Mia, an advocate, explained how she doesn’t think that the businesses are well aware of how individuals arrive at their businesses from her perspective. Even still, businesses hold a lot of power in the decision-making process. She stated:
“Generally, the people who get in the way of the cycling infrastructure are businesses who don't understand how people get to their business like Commercial Drive. They did some surveys of how people got to the businesses, and I don't remember the exact number...but it was like 80 something percent of people who did not drive to those businesses. They took transit, they walked with their bikes, and the business owners thought it was almost the reverse. They thought everyone was driving to their business…Commercial Drive...business associations...they seem to have a veto power, and it just hasn't happened, even though there was support from a lot of other areas”.<br><br>

Ellis, an advocate, explained how such opposition is a lack of good cycling infrastructure in East and South Vancouver. Moreover, Vancouver has been reluctant to put cycling infrastructure on the high streets and main thoroughfares. Trying to plan cycling infrastructure for East and South Vancouver, especially on any high streets, creates many pushbacks versus the focus on residential streets that are usually parallel to the high streets. Other participants reiterated the point that Ellis made about the lack of cycling infrastructure on the high streets. Blake, at Translink, elaborated:
“If you look at all of the destination streets, there's no good cycling infrastructure on any of those streets. Like Commercial Drive, Cambie, Broadway. So it just kind of reinforces this idea that it's really hard politically to get these decisions pushed through. But obviously, the ideal scenario is that you would have good cycling infrastructure on the highest corridor streets where people actually go and not on these kind of like Mickey mouse back streets...That investment would have the most impact, like the most return on investment, most social equity return. But it's just a bit too hard to get over the line. And Commercial Drive is probably the best example because they have a really, really progressive community, but a really regressive BIA...and has the highest mode share of any neighborhood in the city. Probably one of the highest in Canada, I would imagine. And there's no bike bike lane on the main street”.<br><br>

Blake reinforced how complicated the politics of these cycling infrastructure decisions can be. Despite having one of the highest mode shares cycling across Canada, there continues to be no cycling infrastructure on the main thoroughfares, and certainly none on Commercial Drive. These findings beg the question of how much power the BIAs hold in Vancouver while questioning which public the city is planning for.
`;

const eighthParaText = `With the first phase approved by council in 2020, the Granville Bridge connector is a current example of needing to provide safe cycling infrastructure to keep people safe. Yet, some do not want to invest in the improvements because they could continue using the infrastructure as is. Dan, at the city, explained the problems with not building infrastructure on the Granville Bridge and pointing to the Burrard Bridge as an example of it working out very well. He remarked:
“A lot of people are like, Oh, we shouldn't put bike infrastructure cause people just use a sidewalk and I respond to them like, well, if people were biking on the sidewalks, it is because you've not given them a good alternative. And so we find that like on Granville street, on Granville bridge right now, there are relatively few people because it's scary. And 50% of the people that do go are on the sidewalk because they're afraid of traffic. And then you look at Burrard bridge, where we've made all these improvements. 99.4% of people are using the path, and only 0.6% of people are on the sidewalk. And if they are on the sidewalk, it's probably cause they stopped to enjoy the view. So we have kind of real stats to point to”.<br><br>

Data on the uptake of infrastructure is paramount to the ongoing success of that infrastructure and the decision-making for other infrastructure projects. Another crucial aspect of a project's success is the amount and quality of public engagement. Logan, who was at the city, explained how the engagement process was critical in the Granville Bridge connector because of the data to support infrastructure. Yet, it wasn’t clear what the infrastructure design was, and it had to be changed due to public engagement feedback. He reflected:
“The data supports it. So what kind of information can you get through engagement process that would overturn that data? Sometimes a case would be the Granville Bridge connector. They were so like, it just seems so obvious to run that down the middle. And when council pushed them to go back out to do more engagement, people are like, why? When nobody wants to walk down the middle and why not go to the edge...”<br><br>

Tom, previously at Translink, explained how the Granville Bridge redesign is changing in later stages because of the equity lens that the city has currently adopted. He stated:
“Hopefully that there's some, you know, forward-thinking planners out there as well and engineers who also are seeing this need. And certainly, so for example, I know that on the Granville Bridge redesign that the city at the latter stages of their process design decided to bring in Jay Pitter from Toronto, who's quite knowledgeable in this area of equity and transportation planning. And I think that that's helped to give them a better perspective on that, although it was rather late in the game. Like this is coming at us, this is fresh, this is new, but it's quickly bubbling, and it's causing the institutions to react”.

As the interviews took place during the pandemic, the equity lens was brought up in many discussions about planning at the City of Vancouver. Another cycling infrastructure decision that came about due to the pandemic was the temporary bike lanes in Stanley Park. I will discuss Stanley Park in the following infrastructure location section.<br><br>
`;

const ninethParaText = `Once the COVID-19 pandemic restructured Vancouver and the way of life, there was a surge in the popularity of cycling. Many cyclists advocated for more space to bike while being physically distanced from others. The City and the Park Board made more space for bikes when very few people were driving their cars (due to most individuals working from home). The Park Board did agree to close down one lane of Stanley Park to cars, allocating the regular bike lane along the seawall to pedestrians only and cyclists were given one lane where cars usually drove. However, the space reallocation did not last very long, as the businesses within the park complained that it would hurt their business recovery and inhibit patrons in the park. Others complained about the accessibility of the park, as it became very slow for those who were visiting the park with a car.<br><br>
Ellis, an advocate, spoke about the politics of the park board during the pandemic and how there continues to be a lack of support for cycling projects on the park board and infrastructure projects are held back. She explained:
“The road reallocation in Stanley park, to me, is just a great example because that one was brought about because of the pandemic. So, all of a sudden, things can happen quickly and easily that could never, ever normally happen...Well, that was a miracle that was amazing. And then for John Irwin to bring forward the concept of let's look at ways to make this permanent was spectacular. And, of course, feeds right into the climate emergency action plan that was just voted in. So today I actually had a conversation with counselor Christine Boyle, and we were talking about that specific thing because what I'm going to be trying to do over the next few months before it comes to park commissioners for decision is build a coalition of, so it's not just, and again, that gets back to the whole bike versus others. Hopefully, we'll be able to come to that meeting with a coalition of people who all want to see, and I would say, better accessibility for all in Stanley Park. So I think...honestly, just looking at the classic voices, which are the Trish Barkers and the John Coupar's on park board, just in my opinion, such a nightmare, those two. And I've been dealing with John Coupar for many years on the park board, but it's exactly that old entrench pandering to uninformed and fear-mongering tendencies. And it really, it can take over the conversation to the point where you lose opportunities, even though we've moved forward as a society in our own way”.<br><br>

Emma, one of the current councillors, commented on the topic of Stanley Park and how it’s an example of some people being averse to change and raising concerns about these changes. She stated:
“Change is hard for people. And I think we've been seeing that conversation emerge recently around Stanley park...it's an interesting one because I think it got a bit polarized, but I hear where people were coming from. There was a desire to say, hey, we've had such a huge uptake in cycling and walking, and they were trying to make space because so many people are going there. So they closed the roadway that cyclists from the roadway, then there's a desire to make more space for cyclists in the long-term and sort of share the road. And then on the other side, which I think is fantastic, is that the people who have legitimate concerns too, about people with disabilities who want to access the park and seniors and others. And so again, back to shared use, it doesn't have to be all or nothing...Even if it's set out in our strategy that we would like to increase it, cycling infrastructure or we would like to increase the shared use of our roads, there's always gotta be touchpoints back with the public to bring them along in that… I got an email from a gentleman who, I don't know how old he is, but just from what he described, he wasn't retired, but he was explaining how he had taken up cycling during the pandemic. And he'd never really been much of a cyclist, started riding in Stanley park, loved it, and then started riding down to st. Paul's hospital where he was working. And I think he's a physician. And he said, you know, I think that the park should be open to all. So there should be some access by car. He said, I think, finding some way to accommodate bikes as well. And he had found his joy for cycling that really was sparked by the pandemic because there's fewer cars on the road. And people were kind of trying out different things they wanted to get outside. I just thought that was interesting is that, as being a catalyst for residents to sort of shift their mindset around it, right?”<br><br>

Jesse, one of the Park Board members, commented on the Stanley Park lane re-allocation and explained how they were never restricting access to the park but reducing motor traffic in the park. Though, some perceive one lane closure as a closure entirely. He stated:
“I've been in contact with a member who was doing motions and wanted me to review them, I said, hey, make sure that you add in that we're doing this trying to try to affect change in Stanley park regarding the cycling changes. And so I guess the good news is that that's happened and when I say happened, what I mean is it started cause some people are trying to pitch it as a decision that's made and set in stone. But you know, what we did was redirected staff to look at reducing motor vehicle traffic in Stanley Park, including, but not restricted to, reducing roadways to a single lane while maintaining access to the park. So some people aren't reading that as, you know, pretty good prospect that they're still going to be able to drive in the park. So that's caused a little bit of a flare-up, which, you know, in some ways creates debate...So, and then, of course, as we would need, I would cheer staff on…I think one of the great things that Vision Vancouver did is they empowered staff to do sort of, you know, chunk by chunk improvements to the cycling network without always having to go back out to the public”.<br><br>

Nick, an engineer who was at the city, mentioned how opportunistic the transportation department should be during the pandemic, offering his opinion on the decision-making process surrounding the lane closures and how these closures will be treated as pilot projects that the City can look back to when making further plans. He commented:
“I have chatted with colleagues who are working through it, and it's interesting, like how opportunistic should they be? Like, is it unfair to be so cavalier and jump out there and take away every curb lane for traffic, so you have sidewalks because some people are like, let's just keep this? They've closed down Stanley Park, and it's become this cycling nirvana, and we are asking the question of should this be permanent and how do we work towards something like this in the long run. So it's been fun to just kind of push people's limits, but the pessimist in me is like, is it dangerous to take advantage of the opportunity and suggest that it's rational and or justified through some other special set of circumstances? But I hope it's used as a good incubator, even if a small percentage of them stay permanent, it's probably still better than what we would have done with the status quo...I also wondered… about people like myself working from home. I need to go out and get my mental health break and walk, suddenly I care a lot more about my walking infrastructure...like there better be good places to maybe grab a coffee. Things I would have done downtown, things that were easy”.<br><br>

Overall, the changes to Stanley Park, at this time, may or may not be permanent. The relationship between the transportation department, park board, advocacy groups, and BIAs continues to be contentious at times, especially when dealing with access—especially for those driving to or through the park. The lane closure in Stanley Park also gives rise to the question of pilot projects as an effective tool for engagement in the decision-making process. This pilot project may not have happened if there were not requests for more space to walk, bike, and roll in the park. In the next section, I discuss how the pandemic has shifted some of the decision-makers' opinions and methods for dealing with cycling infrastructure projects and look forward to future changes they see in transportation. 
`;

var chapter1 = new ChapterData( [-123.137186, 49.275323], 'Burrard Street Bridge', firstParaText );
chapter1.on_chap_enter = [ { layer: 'bikeways', opacity: 1.0 } ];
chapter1.on_chap_exit = [ { layer: 'building-extrusion', opacity: 0.3 } ];
chapter1.image_path = './images/burrard_bridge.jpeg';

var chapter2 = new ChapterData( [-123.137186, 49.275323], 'Burrard Street Crashes Involving Cyclists',
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data');
chapter2.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter2.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];
chapter2.image_path = './images/burrard_crashes.webp';

var chapter3 = new ChapterData( [-123.137186, 49.275323], 'Burrard Street Bike Racks', 
    'This layer represents the presence of bike racks in Vancouver and the density of bike racks at the location');
chapter3.on_chap_enter = [ { layer: 'bike-racks', opacity: 1.0 } ] ; 
chapter3.image_path = './images/burrard_racks.jpeg';

var chapter4 = new ChapterData( [-123.124980, 49.280540], 'Hornby Street', secondParaText );
chapter4.image_path = './images/hornby_lane.jpeg';

var chapter5 = new ChapterData( [-123.124980, 49.280540], 'Hornby Street Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data');
chapter5.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter5.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ]; 
chapter5.image_path = './images/hornby_crashes.jpeg';

var chapter6 = new ChapterData( [-123.103500, 49.277440], 'Dunsmuir Street', thirdParaText );
chapter6.image_path = './images/dunsmuir_lane.jpeg';

var chapter7 = new ChapterData( [-123.103500, 49.277440], 'Dunsmuir Street Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data' , );
chapter7.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter7.on_chap_exit =  [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ]; 

var chapter8 = new ChapterData( [-123.102270, 49.273454], 'Seaside Greenway', fourthParaText );
chapter8.image_path = './images/seaside_lane.jpeg';

var chapter9 = new ChapterData( [-123.102270, 49.273454], 'Seaside Greenway Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data' ,);
chapter9.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter9.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];

var chapter10 = new ChapterData( [-123.185915, 49.272282], 'Point Grey Road', fifthParaText );
chapter10.image_path = './images/point_grey.jpeg';

var chapter11 = new ChapterData( [-123.185915, 49.272282], 'Point Grey Road Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data',);
chapter11.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter11.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];

var chapter12 = new ChapterData( [-123.15295, 49.275723], 'Kitsilano Beach', sixthParaText );
chapter12.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ]; 
chapter12.image_path = './images/kitsilano_beach.jpeg';

var chapter13 = new ChapterData( [-123.15295, 49.275723], 'Kitsilano Beach Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data',);
chapter13.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter13.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];

var chapter14 = new ChapterData( [-123.069634, 49.269893], 'Commercial Drive', seventhParaText );
chapter14.image_path = './images/commercial.jpeg';

var chapter15 = new ChapterData( [-123.069634, 49.269893], 'Commercial Drive Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data' ,);
chapter15.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter15.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];

var chapter16 = new ChapterData( [-123.133, 49.272], 'Granville Bridge', eighthParaText );
chapter16.image_path = './images/granville.jpeg';

var chapter17 = new ChapterData(  [-123.133, 49.272], 'Granville Bridge Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data',);
chapter17.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter17.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];

var chapter18 = new ChapterData( [-123.126745, 49.297189], 'Stanley Park Seawall', ninethParaText );
chapter18.image_path = './images/stanley.png';

var chapter19 = new ChapterData( [-123.126745, 49.297189], 'Stanley Park Seawall Crashes Involving Cyclists', 
    'This layer represents the crashes involving cyclists at this location sourced from ICBC data',);
chapter19.on_chap_enter = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.5 } ];
chapter19.on_chap_exit = [ { layer: 'bc-crashes-involving-cyclists', opacity: 0.0 } ];

var chapter20 = new ChapterData( [-123.1140, 49.2608], 'This has been a story of Vancouver cycling infrastructure over time. As of 2022, there will be many more projects in the future. Many more.');


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
        createPOI( chapter1 ),
        createPOI( chapter2 ), 
        createPOI( chapter3 ),
        createPOI( chapter4 ),
        createPOI( chapter5 ),
        createPOI( chapter6 ),
        createPOI( chapter7 ),
        createPOI( chapter8 ),
        createPOI( chapter9 ),
        createPOI( chapter10 ),
        createPOI( chapter11 ),
        createPOI( chapter12 ),
        createPOI( chapter13 ),
        createPOI( chapter14 ),
        createPOI( chapter15 ),
        createPOI( chapter16 ),
        createPOI( chapter17 ),
        createPOI( chapter18 ),
        createPOI( chapter19 ),
        createPOI( chapter20 ),

		]
};

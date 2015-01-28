---
layout: paper
title: Searching Without Segments

version: 0.1.0
icon:    fa-dot-circle-o
tagline: Search segments are time-consuming to create and not often searched completely. Get your resources in the field faster, and track search progress better, by ditching the segment for good.
action:  Find out how
---

<p class="intro">{{ page.tagline }}</p>

### The ubiquitous segment

It's hard to imagine any but the very shortest of searches without at least a handful of search segments. The segment has a long tradition as the basic unit of searcher effort --- a search area is divided into segments, which are checked off one by one. Segments also allow search managers to give multiple field teams instructions to each search specific, non-overlapping areas. In short, the segment serves two key roles:

-   Track search progress

-   Direct field teams

This paper explores why the segment is a poor choice for these roles, and presents a novel way to manage searches without segments.

### Why segments have problems

The segment is far from perfect. It presents a number of problems for the search manager:

-   Segments take significant time to create, taking management energy away from thinking critically about the best strategy to locate the subject.

-   Describing segments in field task descriptions also takes significant time, often spent late at night when the management team could be resting, or worse, preventing field teams from being dispatched in a timely manner.

-   Many search areas lack enough features to clearly demarcate segment boundaries of a reasonable size, resulting in unsearchably large segments, or segments with boundaries not easily discernible by field teams.

-   Segments are often created without complete ground-truth knowledge of the search area, resulting in illogical segments, or segments containing unsearchable areas, such as areas behind an uncrossable fence. Field teams may discover these areas during their tasks, but the information rarely makes it back onto the ICP planning map. These discrepancies can persist for an entire search, resulting in areas which never get searched.

The segment is also an imperfect tool to track search progress:

-   Field teams do not always search their entire segment, but the segment-based planning map in the ICP doesn't show this. Crude methods of accounting for partially searched segments, such as multiplying a team's POD by the fraction of the segment actually searched, still do not capture enough details about which portion of the segment was covered.

-   Field team POD estimates are unreliable, and even alternative methods of calculating estimated POD require impossibly accurate field measurements of field team member spacing, and assume a constant POD across an entire segment.

-   Late in a search, search managers may wish to direct a field team to search a specific location, or specific portion of an existing segment, but there is no clear way to include results from these search efforts on the ICP planning map or in calculations of search progress.

Our friend the segment isn't so great at directing field teams either:

-   Without ground-truth knowledge, it is not always possible to create segments of an appropriate size to searched effectively. Segments that are too large may be searched ineffectively due to searcher fatigue, and too small segments waste valuable searcher time traveling to and from the ICP.

-   Field teams often do not search their assigned segment in its entirety --- or may mistakenly search all or part of an adjacent segment.

-   Segment descriptions in field task instructions can be wordy and difficult to understand.

### New technology for tracking progress

Given the poor performance of the search segment, what then are our other options? Let's first examine how to account for search progress without using segments.

Given the lack of an accurate method for estimating or calculating POD, this paper proposes tracking search progress by coverage instead of POD or POS. The search planners still assign POA in whatever way is most appropriate, and field tasks are dispatched in order of decreasing POA. However, progress is tracked by GPS tracks --- one GPS per field team is required; more are preferred. A GIS is used to visualize coverage by displaying all completed tracks on the planning map. Areas with higher POA should be searched sooner, and to denser coverage, than areas with low POA. Areas which have not been searched will be quickly apparent, and additional field tasks can be dispatched to fill in the coverage gaps.

### A better way to direct searchers

Now that we no longer need to track search progress segment by segment, we are free to direct our field teams in whatever way is most efficient and appropriate for the circumstances of each particular incident. 

Rather than spending significant time and energy defining segments at the beginning of a WiSAR incident, field tasks should be dispatched quickly and efficiently to high-priority areas with minimal management time spent defining individual boundaries for field teams. A field task description should include simple instructions to search a general area, with optional time or resource limits, and focus on search techniques specific to the circumstances of the incident, rather than constraining the team inside an arbitrary boundary. For example:

>   Search for 3 hours around 18 N 577130 4909670. Focus first on corridors within 50 meters of any linear feature.

Field team leaders can define their own boundaries based on obvious features present on the ground; actual area covered will depend on team size, speed, and terrain. Upon return to the ICP, the team's GPS track(s) will be used during debriefing and will show exactly what was covered. As the search progresses and the coverage map begins to fill in, field tasks can be written with more specific instructions to search an area that has so far been missed.

### Questions and answers

#### What if two field teams try to search the same area?

This isn't a problem. If two teams run into each other while in the field, the team leaders can briefly confer and identify a mutual boundary between their two areas. At the beginning of an incident, or whenever multiple teams are being dispatched at once, team leaders may wish to briefly compare search areas before leaving on task to avoid crossing paths in the field.

If multiple teams unintentionally search some of the same areas at separate times, this is also not a problem. Multiple search efforts will be shown on the planning map and coverage will increase accordingly.

#### I am a dog handler --- other searchers near me will confuse my canine partner.

This is a problem with traditional segment-based searches, too. After all, scent cones don't stay within segment boundaries. Search managers should be aware of where canine and ground teams are assigned, and not assign them too close together --- in the same way they always have.

#### But I really want this exact area searched.

Then describe it exactly in a task and send out a field team. You can even call it a segment if you'd like. Just don't worry about keeping that segment around for future tasks, or tracking search progress with it. With this system, you are free to direct field teams in any way you'd like, and coverage will still be tracked with GPS tracks.

#### I need to maintain field team accountability.

Yes, you do. Keep in mind your task descriptions and maps still direct your field teams to a specific location, you just aren't defining the task's exact boundaries. This is no less accountable than traditional searching --- after all, you can't assume field teams always stay inside their prescribed segments.

#### Coverage is nice, but I need to calculate POD and POS to justify suspending a search.

Do you? The traditional math of POA, POD, and POS sounds nice, but when is the last time you suspended an actual search because you reached a target POS? In reality, most searches are suspended due to lack of resources, and POS is never used. But, if you want to calculate POD and POS, you certainly can --- use the field team GPS tracks and an estimate of searcher spacing along with a measure of searcher effectiveness such as ESW or AMDR to calculate POD. If you have tracks for each individual field team member, you don't need to make assumptions about searcher spacing. Keep in mind, the output of any calculation is only as good as its inputs, and making assumptions about spacing, ESW, or AMDR could make your POD calculation nearly meaningless.

#### What about POA assignment?

Depending on the process you use for POA assignment, you may choose to define probability regions. This is fine --- you just don't need to divide them into segments. Individual field tasks will still fall into one region or another and can be dispatched accordingly. However, keep in mind that searching without segments also frees you to assign POA in any way, to include other novel approaches of POA assignment which are data-driven instead of consensus-based, and may assign POA in a more granular fashion than by region.

#### This sounds nice, but downloading GPS tracks from all my teams is too hard.

Not anymore. [New](https://github.com/emenendez/gpxutils/) [tools](https://github.com/emenendez/GPSmapper/) are available which simply the previously time-consuming process of downloading and processing GPS tracks by hand. Also, all modern smartphones have GPS functionality which for the purposes of WiSAR, is just as accurate as any recreational GPS.

#### How can I visualize all those GPS tracks?

You will need to use a GIS. Take a look at the [Integrated Geospatial Tools for Search and Rescue](https://github.com/dferguso/MapSAR_Ex/), a full-featured GIS template for managing a WiSAR incident. If you want something simpler, just for visualizing tracks, try [GPSmapper](https://github.com/emenendez/GPSmapper/) or [SARtopo](http://sartopo.com).


*[POA]:   probability of area
*[POD]:   probability of detection
*[POS]:   probability of success
*[ICP]:   incident command post
*[GIS]:   geographic information system
*[WiSAR]: wildland search and rescue
*[ESW]:   effective sweep width
*[AMDR]:  average maximum detection range

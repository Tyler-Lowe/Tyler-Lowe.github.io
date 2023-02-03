seeMoreText = 'Responsible for designing, coding and modifying the website, from layout to functionality in order to provide a seamless transition from the homepage to the learning environment. Strived to create visually appealing sites that feature user-friendly design and clear navigation. Applied extensive working knowledge of HTML/CSS and JavaScript to create a fluid flow throughout homepage and its learning environment Developed a dynamic and interactive website that increased traffic and user experienceEarned reputation as a creative problem solver with a high aptitude to self-sufficiently resolve issues and prioritize tasks.'

seeMoreText2 = 'Effectively managed 15 personnel in a high-pressure, fast-paced environment requiring keen attention to detail. Oriented 20 new employees to ensure understanding of organizational methodologies. Cross-functionally liaised across intelligence agencies to devise effective analytic and collection strategies to exploit threats and targets, isolate vulnerabilities, and counter terrorism activities.Trusted advisor to the intelligence community. Drafted, edited, and researched information for multifaceted documentation requirements. Facilitated more than 50 high impact intelligence briefings on national security to increase technical expertise and support executive discussions. Responsible for 50% of branch product reports. Key Accomplishment: Consolidated daily analytic workflows into automated models, saved thousands of hours annually, and introduced new data resources in two additional branches.'


function seeMore() {
    document.getElementById('seeMore').innerHTML = seeMoreText;
}

function seeMore2() {
    let mathAnswer = prompt('In order to see this section please answer this question correctly? What is (2 + 2) ?');
    if (mathAnswer != 4) {
        alert('Danger Danger')
    } else {
        document.getElementById('seeMore2').innerHTML = seeMoreText2;
    }
    
}
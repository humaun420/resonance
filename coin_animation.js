window.onload = function() {
    let masterTimeline = gsap.timeline({scrollTrigger:{
            trigger: '#about',
            start: 'top 80%',
            end: 'bottom center',
        }});
    let movingTimeline = gsap.timeline({ease: "power4.in"});
    let rotatingTimeline = gsap.timeline({ease: "power4.in"});

    gsap.set('.coin',{
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        rotation: 90, // Start rotation angle
        transformOrigin: '50% 50%'
    })

    movingTimeline.to('#coin-1', {
        rotation: 45,
        opacity:1,
        top: '15%',
        left: '45%',
        duration: 2,
    })
    .to('#coin-2', {
        rotation: 45,
        opacity:1,
        top: '24%',
        left: '60%',
        duration: 2,
    }, '<')
    .to('#coin-3', {
        rotation: 45,
        opacity:1,
        top: '11%',
        left: '71%',
        duration: 2,
    }, '<')
    .to('#coin-4', {
        rotation: 45,
        opacity:1,
        top: '18%',
        left: '82%',
        duration: 2,
    }, '<')
    .to('#coin-5', {
        rotation: 45,
        opacity:1,
        top: '15%',
        left: '100%',
        duration: 2,
    }, '<')
    .to('#coin-6', {
        rotation: 45,
        opacity:1,
        top: '41%',
        left: '86%',
        duration: 2,
    }, '<')
    // .to('#coin-7', {
    //     rotation: 45,
    //     opacity:1,
    //     top: '20%',
    //     left: '90%',
    //     duration: 5,
    // }, '<')
    .to('#coin-8', {
        rotation: 45,
        opacity:1,
        top: '52%',
        left: '102%',
        duration: 2,
    }, '<')
    .to('#coin-9', {
        rotation: 45,
        opacity:1,
        top: '79%',
        left: '93%',
        duration: 2,
    }, '<')
    // .to('#coin-10', {
    //     rotation: 45,
    //     opacity:1,
    //     top: '70%',
    //     left: '90%',
    //     duration: 5,
    // }, '<')
    .to('#coin-11', {
        rotation: 45,
        opacity:1,
        top: '95%',
        left: '65%',
        duration: 2,
    }, '<')
    .to('#coin-12', {
        rotation: 45,
        opacity:1,
        top: '95%',
        left: '54%',
        duration: 2,
    }, '<')
    .to('#coin-13', {
        rotation: 45,
        opacity:1,
        top: '104%',
        left: '40%',
        duration: 2,
    }, '<')
    // .to('#coin-14', {
    //     rotation: 45,
    //     opacity:1,
    //     top: '90%',
    //     left: '50%',
    //     duration: 5,
    // }, '<')
    .to('#coin-15', {
        rotation: 45,
        opacity:1,
        top: '81%',
        left: '18%',
        duration: 2,
    }, '<')
    .to('#coin-16', {
        rotation: 45,
        opacity:1,
        top: '97%',
        left: '4%',
        duration: 2,
    }, '<')
    .to('#coin-17', {
        rotation: 45,
        opacity:1,
        top: '64%',
        left: '13%',
        duration: 2,
    }, '<')
    // .to('#coin-18', {
    //     rotation: 45,
    //     opacity:1,
    //     top: '70%',
    //     left: '5%',
    //     duration: 5,
    // }, '<')
    // .to('#coin-19', {
    //     rotation: 45,
    //     opacity:1,
    //     top: '32%',
    //     left: '6%',
    //     duration: 2,
    // }, '<')
    .to('#coin-20', {
        rotation: 45,
        opacity:1,
        top: '35%',
        left: '18%',
        duration: 2,
    }, '<')
    .to('#coin-21', {
        rotation: 45,
        opacity:1,
        top: '13%',
        left: '22%',
        duration: 2,
    }, '<')

    rotatingTimeline.to('.coin', {
        rotation: -132,
        duration: 15,
    })

    masterTimeline.add(movingTimeline);
    masterTimeline.add(rotatingTimeline);
}
window.addEventListener('DOMContentLoaded', () => {

    // to maintain a simultaneous timeline to every animation timeline
    let masterTimeLine = gsap.timeline({repeat: -1, ease: "power4.in", repeatDelay: 2,});

    // control the all animation parts
    function serverProcessingAnimation() {
        // GSAP timeline for timed animations
        const tl = gsap.timeline({paused: true});

        tl.to('#message_outgoing', {
            height: 'auto',
            duration: 1,
        })
            .to('#private_device_ip_show', {
                opacity: 1,
                duration: 1,
            }, 0)

            .to({}, {duration: 1})

            .to('#message_outgoing', {
                x: 320,
                duration: 1,
            })
            .to('#private_device_ip_hidden', {
                opacity: 1,
                duration: 1,
            }, '<')
            .to('#private_device_ip_show', {
                opacity: 0,
                duration: 1,
            }, '<')
            .to('#PGP_1', {
                x: '14%',
                duration: 1
            }, '<')
            .to('#server_1', {
                opacity: 1,
                duration: 1,
            }, '<')

            .to({}, {duration: 1})

            //Spread all parts of server 1
            .to('#server_1 .server_segment_1', {
                y: 339,
                scale: 1.2,
                duration: 1,
            })
            .to('#server_1 .server_segment_2', {
                y: 320,
                duration: 1,
            }, '<')
            .to('#server_1 .server_mid_part', {
                y: 314,
                duration: 1,
            }, '<')
            .to('#server_1 .server_mid_part_2', {
                y: 242,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_3', {
                y: 200,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_4', {
                y: 155,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_5', {
                y: 101,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_6', {
                y: 50,
                duration: 1,
            }, '<')
            // ./Spread all parts of server 1

            .to({}, {duration: 1})

            .to('#PGP_1', {
                top: '100%',
                duration: 1,
            })
            .to('#PGP_2', {
                top: 0,
                duration: 1,
            }, '<')

            //Reposition all parts of server 1
            .to('#server_1 .server_segment_1', {
                y: 378,
                scale: 1,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_2', {
                y: 335,
                duration: 1,
            }, '<')
            .to('#server_1 .server_mid_part', {
                y: 300,
                duration: 1,
            }, '<')
            .to('#server_1 .server_mid_part_2', {
                y: 212,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_3', {
                y: 171,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_4', {
                y: 137,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_5', {
                y: 103,
                duration: 1,
            }, '<')
            .to('#server_1 .server_segment_6', {
                y: 69,
                duration: 1,
            }, '<')
            .to('#server_1', {
                opacity: 0.3,
                duration: 1,
            }, '<')
            // ./Reposition all parts of server 1

            .to('#server_2', {
                opacity: 1,
                duration: 1
            }, '<')
            //Spread all parts of server 2
            .to('#server_2 .server_segment_1', {
                y: 335,
                scale: 1.5,
                duration: 1,
            })
            .to('#server_2 .server_segment_2', {
                y: 320,
                duration: 1,
            }, '<')
            .to('#server_2 .server_mid_part', {
                duration: 0,
                opacity: 0,
            }, '<')
            .to('#server_2 .server_segment_ring_half', {
                duration: 0,
                opacity: 0,
            }, '<')
            .to('#server_2 .server_mid_part_2', {
                duration: 0,
                opacity: 0
            }, '<')
            .to('#server_2 .server_segment_3', {
                y: 158,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_4', {
                y: 119,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_5', {
                y: 81,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_6', {
                y: 56,
                duration: 1,
            }, '<')
            // ./Spread all parts of server 2

            .to({}, {duration: 1})

            // move  tor bar left
            .to('#tor_bar', {
                right: '171%',
                duration: 1
            })
            .to('#tor_bar > img', {
                width: 6,
                duration: 1
            }, '<')

            .to({}, {})

            .to('#tor_bar', {
                right: '71%',
                // left: 0,
                duration: 1
            })
            .to('#tor_bar > img', {
                width: 'auto',
                duration: 1
            }, '<')
            // ./move  tor bar left

            // Reposition all parts of server 2
            .to('#server_2 .server_segment_1', {
                y: 378,
                scale: 1,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_2', {
                y: 335,
                duration: 1,
            }, '<')
            .to('#server_2 .server_mid_part', {
                y: 300,
                duration: 0,
                opacity: 1,
            }, '<')
            .to('#server_2 .server_segment_ring_half', {
                y: 250,
                duration: 0,
                opacity: 1,
            }, '<')
            .to('#server_2 .server_mid_part_2', {
                y: 212,
                duration: 0,
                opacity: 1
            }, '<')
            .to('#server_2 .server_segment_3', {
                y: 171,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_4', {
                y: 137,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_5', {
                y: 103,
                duration: 1,
            }, '<')
            .to('#server_2 .server_segment_6', {
                y: 69,
                duration: 1,
            }, '<')
            .to('#server_2', {
                opacity: 0.3,
                duration: 1,
            }, '<')
            // ./Reposition all parts of server 2

            .to('#PGP_2', {
                x: '125%',
                duration: 1
            })
            .to('#PGP_3', {
                x: '14%',
                duration: 1
            }, '<')
            .to('#server_3', {
                opacity: 1,
                duration: 1,
            }, '<')

            // move  tor bar right
            .to('#tor_bar', {
                right: '-29%',
                duration: 1
            })
            .to('#tor_bar > img', {
                width: 6,
                duration: 1
            }, '<')

            .to({}, {})

            .to('#tor_bar', {
                right: '71%',
                duration: 1,
            })
            .to('#tor_bar > img', {
                width: 'auto',
                duration: 1
            }, '<')
            // // ./move  tor bar right

            //Spread all parts of server 3
            .to('#server_3 .server_segment_1', {
                y: 339,
                scale: 1.2,
                duration: 1,
            })
            .to('#server_3 .server_segment_2', {
                y: 320,
                duration: 1,
            }, '<')
            .to('#server_3 .server_mid_part', {
                y: 314,
                duration: 1,
            }, '<')
            .to('#server_3 .server_mid_part_2', {
                y: 242,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_3', {
                y: 200,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_4', {
                y: 155,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_5', {
                y: 101,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_6', {
                y: 50,
                duration: 1,
            }, '<')
            // ./Spread all parts of server 3
            .to({}, {})

            .to('#PGP_3', {
                top: '100%',
                duration: 1,
            })
            .to('#PGP_4', {
                top: 0,
                duration: 1,
            }, '<')

            //Reposition all parts of server 3
            .to('#server_3 .server_segment_1', {
                y: 378,
                scale: 1,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_2', {
                y: 335,
                duration: 1,
            }, '<')
            .to('#server_3 .server_mid_part', {
                y: 300,
                duration: 1,
            }, '<')
            .to('#server_3 .server_mid_part_2', {
                y: 212,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_3', {
                y: 171,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_4', {
                y: 137,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_5', {
                y: 103,
                duration: 1,
            }, '<')
            .to('#server_3 .server_segment_6', {
                y: 69,
                duration: 1,
            }, '<')
            .to('#server_3', {
                opacity: 0.3,
                duration: 1,
            }, '<')
            // ./Reposition all parts of server 3

            .to('#server_4', {
                opacity: 1,
                duration: 1,
            }, '<')

            // spread all parts of server 4
            .to('#server_4 .server_segment_1', {
                y: 335,
                scale: 1.5,
                duration: 1,
            })
            .to('#server_4 .server_segment_2', {
                y: 320,
                duration: 1,
            }, '<')
            .to('#server_4 .server_mid_part', {
                duration: 0,
                opacity: 0,
            }, '<')
            .to('#server_4 .server_segment_ring_half', {
                duration: 0,
                opacity: 0,
            }, '<')
            .to('#server_4 .server_mid_part_2', {
                duration: 0,
                opacity: 0
            }, '<')
            .to('#server_4 .server_segment_3', {
                y: 158,
                duration: 1,
            }, '<')
            .to('#server_4 .server_segment_4', {
                y: 119,
                duration: 1,
            }, '<')
            .to('#server_4 .server_segment_5', {
                y: 81,
                duration: 1,
            }, '<')
            .to('#server_4 .server_segment_6', {
                y: 56,
                duration: 1,
            }, '<')
            // ./Spread all parts of server 4

            // Reposition all parts of server 4
            .to('#server_4 .server_segment_1', {
                y: 378,
                scale: 1,
                duration: 1,
            })
            .to('#server_4 .server_segment_2', {
                y: 335,
                duration: 1,
            }, '<')
            .to('#server_4 .server_mid_part', {
                y: 300,
                duration: 0,
                opacity: 1,
            }, '<')
            .to('#server_4 .server_segment_ring_half', {
                y: 250,
                duration: 0,
                opacity: 1,
            }, '<')
            .to('#server_4 .server_mid_part_2', {
                y: 212,
                duration: 0,
                opacity: 1
            }, '<')
            .to('#server_4 .server_segment_3', {
                y: 171,
                duration: 1,
            }, '<')
            .to('#server_4 .server_segment_4', {
                y: 137,
                duration: 1,
            }, '<')
            .to('#server_4 .server_segment_5', {
                y: 103,
                duration: 1,
            }, '<')
            .to('#server_4 .server_segment_6', {
                y: 69,
                duration: 1,
            }, '<')
            .to('#server_4', {
                y: -155,
                duration: 1,
            }, '<')

            // ./Reposition all parts of server 4

            .to('#server_1', {
                y: -155,
                opacity: 1,
                duration: 1
            }, '<')
            .to('#server_2', {
                y: -155,
                opacity: 1,
                duration: 1
            }, '<')
            .to('#server_3', {
                y: -155,
                opacity: 1,
                duration: 1
            }, '<')
            .to('#PGP_4', {
                x: '125%',
                duration: 1,
            }, '<')
            .to('#incoming_message', {
                x: 0,
                duration: 1,
            }, '<')

            .to({}, {
                duration: 1,
            })

            .to('#PGP_notification', {
                y: 45,
                duration: 1
            })

            .to('#Phone_response_transparent', {
                opacity: 1,
                duration: 1,
            }, '<')

            .to('#incoming_message', {
                scale: 0.82,
                duration: 1,
            }, '<')
            .to('#incoming_message_container', {
                y: '-80%',
                duration: 1,
            }, '<')
            .to('#Resonance_Logo', {
                width: '35%',
                duration: 1,
            }, '<')
            .to({}, {})
            .to('#response_delivered_notification', {
                height: 'auto',
                duration: 1
            })
            .to('#PGP_notification', {
                y: '-100%',
                duration: 1,
            }, '<')
            .to('#Resonance_Logo', {
                width: 'auto',
                duration: 1,
            }, '<')
            .to('#incoming_message_container', {
                y: '-100%',
                duration: 1,
            }, '<')

        return tl;
    }

    // bottom progress control
    function stepsProgressAnimation() {
        let newTl = gsap.timeline({paused: true});

        newTl.to('#response .inner-progress', {
            duration: 1,
            width: '100%',
        })
            .to('#response .icon-2', {
                opacity: 1,
            }, '<')
            .to('#vpn_transfer_1 .inner-progress', {
                duration: 1,
                width: '100%',
            })
            .to('#response .icon-3', {
                opacity: 1,
            }, '<')
            .to('#vpn_transfer_1 .icon-2', {
                opacity: 1,
            }, '<')
            .to({}, {duration: 1})
            .to('#migration .inner-progress', {
                duration: 3,
                width: '100%',
            })
            .to('#vpn_transfer_1 .icon-3', {
                opacity: 1,
            }, '<')
            .to('#migration .icon-2', {
                opacity: 1,
            }, '<')
            .to({}, {duration: 1})
            .to('#tor_layer .inner-progress', {
                duration: 6,
                width: '100%',
            })
            .to('#migration .icon-3', {
                opacity: 1,
            }, '<')
            .to('#tor_layer .icon-2', {
                opacity: 1,
            }, '<')
            .to({}, {duration: 1})
            .to('#server_migration .inner-progress', {
                duration: 2,
                width: '100%',
            })
            .to('#tor_layer .icon-3', {
                opacity: 1,
            }, '<')
            .to('#server_migration .icon-2', {
                opacity: 1,
            }, '<')
            .to({}, {duration: 1})
            .to('#vpn_transfer .inner-progress', {
                duration: 1,
                width: '100%',
            })
            .to('#server_migration .icon-3', {
                opacity: 1,
            }, '<')
            .to('#vpn_transfer .icon-2', {
                opacity: 1,
            }, '<')
            .to({}, {duration: 1})
            .to('#message_cloud .inner-progress', {
                duration: 1,
                width: '100%',
            })
            .to('#vpn_transfer .icon-3', {
                opacity: 1,
            }, '<')
            .to('#message_cloud .icon-2', {
                opacity: 1,
            }, '<')
            .to('#message_cloud .icon-3', {
                opacity: 1,
            })
            .to({}, {duration: 1})
            .to('#response .inner-progress', {
                width: '0%',
            })
        return newTl;
    }

    // control sliding the SERVER_PROCESS container on 1250 to 992 screen
    function moveContainerOn1250To992Animation() {
        let timeLine = gsap.timeline({paused: true});

        timeLine.to('#SERVER_PROCESS', {
            delay: 9,
            duration: 1,
            x: -275,
        })

        return timeLine;
    }

    // control sliding the SERVER_PROCESS container on 922 to 768 screen
    function moveContainerOn992To768Animation() {
        let timeLine = gsap.timeline({paused: true});

        timeLine.to('#SERVER_PROCESS', {
            delay: 9,
            duration: 1,
            x: -275,
        })
            .to('#SERVER_PROCESS', {
                delay: 8,
                duration: 1,
                x: -550,
            })
            .to('#SERVER_PROCESS', {
                delay: 3,
                duration: 1,
                x: 0,
            })
            .to({}, {duration: 2});

        return timeLine;
    }

    // control sliding the SERVER_PROCESS container on 768 to the rest of screen
    function moveContainerOn768ToRestAnimation() {
        let timeLine = gsap.timeline({paused: true});

        timeLine.to('#SERVER_PROCESS', {
            delay: 3,
            duration: 1,
            x: -300,
        })
            .to('#SERVER_PROCESS', {
                delay: 8,
                duration: 1,
                x: -590,
            })
            .to('#SERVER_PROCESS', {
                delay: 3,
                duration: 1,
                x: -910,
            })
            .to('#SERVER_PROCESS', {
                delay: 4,
                duration: 1,
                x: 0,
            })
            .to({}, {duration: 2});

        return timeLine;
    }

    // check screen size for 1250 to 992
    function checkMediaFor992To1250() {
        if (media992To1250.matches) {
            moveContainerOn1250To992.play();
            masterTimeLine.restart(true, false);
        } else {
            moveContainerOn1250To992.pause();
            masterTimeLine.restart(true, false);
        }
    }

    // check screen size for 922 to 768
    function checkMediaFor992To768() {
        if (media768To992.matches) {
            moveContainerOn992To768.play()
            masterTimeLine.restart(true, false);
        } else {
            moveContainerOn992To768.pause();
            masterTimeLine.restart(true, false);
        }
    }

    // check screen size for 768 to the rest of screen
    function checkMediaFor768ToRest() {
        if (media768ToRest.matches) {
            moveContainerOn768ToRest.play()
            masterTimeLine.restart(true, false);
        } else {
            moveContainerOn768ToRest.pause();
            masterTimeLine.restart(true, false);
        }
    }

    // initialize all animations to begin the animations
    const serverProcessing = serverProcessingAnimation();
    const stepsProgress = stepsProgressAnimation();
    const moveContainerOn1250To992 = moveContainerOn1250To992Animation();
    const moveContainerOn992To768 = moveContainerOn992To768Animation();
    const moveContainerOn768ToRest = moveContainerOn768ToRestAnimation();

    // Media queries
    const media992To1250 = window.matchMedia('(min-width: 992px) and (max-width: 1250px)')
    const media768To992 = window.matchMedia('(min-width: 768px) and (max-width: 992px)')
    const media768ToRest = window.matchMedia('(max-width: 768px)')

    // add all initial animation to the main timeline
    masterTimeLine.add(serverProcessing)
        .add(stepsProgress)
        .add(moveContainerOn1250To992)
        .add(moveContainerOn992To768)
        .add(moveContainerOn768ToRest);

    // play the server processing and step progress animation
    serverProcessing.play();
    stepsProgress.play();

    // start the slide animation on 992 to 1250 screen size
    media992To1250.addEventListener('change', checkMediaFor992To1250);
    checkMediaFor992To1250()

    // start the slide animation on 768 to 992 screen size
    media768To992.addEventListener('change', checkMediaFor992To768);
    checkMediaFor992To768()

    // start the slide animation on 768 to rest of screen size
    media768ToRest.addEventListener('change', checkMediaFor768ToRest);
    checkMediaFor768ToRest()

});
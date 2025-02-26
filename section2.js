document.addEventListener("DOMContentLoaded", ()=> Section2DomLoaded());

const data = {
    messenger: {
        text: "All files are end-to-end encrypted - even the administrator has no access. Store your most sensitive information with confidence.",
        bg: "image/sec2Images/messengerbg.png",
        images: {
            path: "",
            position: "",
            positionValue: ""
        }
    },
    finance: {
        text: "We never share or sell your data to third parties, and we don't use it for targeted ads—your data stays yours.",
        bg: "image/sec2Images/financebg.png",
        images: {
            path: "",
            position: "",
            positionValue: ""
        }
    },
    tools: {
        text: "Edit and share files without a trace. Our proprietary solutions enable anonymous collaboration on documents and spreadsheets - no login, no tracking, no compromises on privacy.",
        bg: "image/sec2Images/toolsbg.png",
        images: {
            path: "image/sec2Images/toolsFront1.png",
            position: "absolute",
            positionValue: ""
        }
    }
};

const bottomPartData = {
    image1: "",
    image2: ""
};
const selectedPart = {
    selected: "messenger"
};
const pushChildToParent = (c, p) => {
    p.append(c);
};

const makeLeftSectionAndRender = (selector, parent) => {
    const card = document.createElement('div');
    card.classList.add('px-4', 'py-6', 'rounded-2xl', 'duration-300', 'cursor-pointer');

    card.addEventListener("click", () => {
        selectedPart.selected = selector;
        updateSelection(); // Update selection when a card is clicked
    });

    const h1 = document.createElement('h1');
    h1.classList.add('capitalize', 'font-black', 'text-3xl', 'pb-4');
    h1.textContent = selector;

    const p = document.createElement('p');
    p.classList.add('text-[#5B379E]', 'text-lg');
    p.textContent = data[selector].text;

    pushChildToParent(h1, card);
    pushChildToParent(p, card);
    pushChildToParent(card, parent);
};

function Section2DomLoaded() {
    const verticalSliderFrame = document.getElementById("sec2VerticalSlider");
    const leftSide = verticalSliderFrame.querySelector('#vsLeftSide');
    const rightSide = verticalSliderFrame.querySelector('#vsRightSide');

    const subSections = Object.keys(data);

    const div100 = document.createElement('div');
    div100.classList.add('w-full', 'rounded-3xl', 'relative', 'overflow-hidden', 'aspect-square', 'my-auto');

    const div300 = document.createElement('div');
    div300.classList.add('h-[300%]', 'w-full', 'rounded-2xl', 'absolute', 'flex', 'flex-col', 'top-[0%]', 'left-[0%]');

    const rightSubDiv = document.createElement('div');
    rightSubDiv.classList.add('w-full', '!h-[calc(100%/3)]');

    subSections.map((sub, index) => {
        makeLeftSectionAndRender(sub, leftSide);

        const img = document.createElement('img');
        img.classList.add('w-full', 'h-full', 'object-cover');
        img.src = data[sub].bg;
        img.dataset.index = index; // Add index for tracking

        pushChildToParent(img, rightSubDiv);
    });

    pushChildToParent(rightSubDiv, div300);
    pushChildToParent(div300, div100);
    pushChildToParent(div100, rightSide);

    // Initial update to apply the selected part
    updateSelection();
}

// Update the selection on the left and right sides
function updateSelection() {
    const leftSideCards = document.querySelectorAll('#vsLeftSide div');
    const rightSide300Div = document.querySelector('#vsRightSide div div'); // The div that needs `top` adjustment

    // Reset all card background colors
    leftSideCards.forEach(card => {
        card.classList.remove('selectedCard');
    });

    // Apply the selected class to the correct card
    const selectedCard = Array.from(leftSideCards).find(card => {
        return card.querySelector('h1').textContent.toLowerCase() === selectedPart.selected;
    });

    if (selectedCard) {
        selectedCard.classList.add('selectedCard');
    }

    // Move the right-side slider
    const selectedIndex = Object.keys(data).indexOf(selectedPart.selected);
    if (rightSide300Div) {
        rightSide300Div.style.transition = "top 0.3s ease-in-out";
        rightSide300Div.style.top = `-${selectedIndex * 100}%`; // Moves up based on index
    }
}


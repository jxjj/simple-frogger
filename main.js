import "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js";
import Frog from "./Frog.mjs";

let frog;

const sketch = s => {
	s.setup = () => {
		s.createCanvas(s.windowWidth, s.windowHeight);
		frog = new Frog({
			x: s.windowWidth / 2,
			y: s.windowHeight - 50,
			size: 50,
			p5Instance: s
		});
	};

	s.draw = () => {
		s.background(255);
		frog.update();
		frog.render();
	};

	s.windowResized = () => {
		s.resizeCanvas(s.windowWidth, s.windowHeight);
	};

	s.keyPressed = () => {
		if (s.keyCode === s.LEFT_ARROW) {
			frog.move("LEFT");
		}
		if (s.keyCode === s.RIGHT_ARROW) {
			frog.move("RIGHT");
		}
		if (s.keyCode === s.UP_ARROW) {
			frog.move("UP");
		}
		if (s.keyCode === s.DOWN_ARROW) {
			frog.move("DOWN");
		}
	};
};

new p5(sketch);

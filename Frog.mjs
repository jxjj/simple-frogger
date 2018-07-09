import mod from "./mod.mjs";
let p5;

export default class Frog {
	constructor({ x, y, size, p5Instance }) {
		if (!p5Instance) throw new Error("No p5Instance given");
		this.x = x;
		this.y = y;
		this.size = size;
		p5 = p5Instance;
		console.log("New Frog");
	}
	move(dir) {
		const direction = dir.toUpperCase();
		if (direction === "LEFT") {
			this.x = mod(this.x - this.size, p5.windowWidth);
		}
		if (direction === "RIGHT") {
			this.x = mod(this.x + this.size, p5.windowWidth);
		}
		if (direction === "UP") {
			this.y = mod(this.y - this.size, p5.windowHeight);
		}
		if (direction === "DOWN") {
			this.y = mod(this.y + this.size, p5.windowHeight);
		}
	}
	update() {}
	render() {
		p5.push();
		p5.noStroke();
		p5.fill(0, 255, 0);
		p5.rectMode(p5.CENTER);
		p5.rect(this.x, this.y, this.size, this.size);
		p5.pop();
	}
}

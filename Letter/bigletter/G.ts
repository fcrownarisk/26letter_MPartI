void function Goto(gotoLabel: string): void {
    const state = { [gotoLabel]: true };
    try {
        if (state[gotoLabel]) {
            console.log(gotoLabel);
        } else {
            setInterval(setTimeout)
        }
    } finally {
        delete state[gotoLabel];
    }
   Goto
}

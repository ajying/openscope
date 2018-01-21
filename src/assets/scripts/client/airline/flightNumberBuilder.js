import { choose } from '../utilities/generalUtilities';

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const NUMERIC = '0123456789';

/**
 * This picks a random number. If it is the first value within the callsign (ie. i === 0), then it picks a
 * number between 1 and 9. Otherwise, it picks a number between 0 and 9.
 * @function _generateNumericValue
 * @param i {number}
 * @return NUMERIC {string}
*/
const _generateNumericValue = (i) => {
    if (i === 0) {
        return choose(NUMERIC.substr(1));
    }

    return choose(NUMERIC);
};

/**
 * This function picks a random letter and returns it.
 * @function _generateAlphaValue
 * @return ALPHA {string}
*/
const _generateAlphaValue = () => {
    return choose(ALPHA);
};

/**
 * Accepts a list of callsign formats, which are defined in the airline files. It randomly selects one of these
 * formats and generates a callsign based off this format.
 *
 * @function flightNumberBuilder
 * @param callsignFormats {array}
 * @return {string}
*/
export const flightNumberBuilder = (callsignFormats) => {
    let flightNumber = '';
    const chosenFormat = choose(callsignFormats);

    for (let i = 0; i < chosenFormat.length; i++) {
        switch (chosenFormat[i]) {
            case '#':
                flightNumber += _generateNumericValue(i);
                break;
            case 'A':
                flightNumber += _generateAlphaValue();
                break;
            default:
                console.warn(`${this.icao} has an incorrect callsign format, it should only contain 'A' or '#'`);
        }
    }

    return flightNumber;
};

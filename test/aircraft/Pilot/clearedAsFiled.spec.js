/* eslint-disable max-len */
import ava from 'ava';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';
import Pilot from '../../../src/assets/scripts/client/aircraft/Pilot/Pilot';
import {
    fmsArrivalFixture,
    modeControllerFixture
} from '../../fixtures/aircraftFixtures';
import {
    createNavigationLibraryFixture,
    resetNavigationLibraryFixture
} from '../../fixtures/navigationLibraryFixtures';

ava.beforeEach(() => {
    createNavigationLibraryFixture();
});

ava.afterEach(() => {
    resetNavigationLibraryFixture();
});

// TODO: Needs AircraftModel fixture, not just pilot
ava.skip('.clearedAsFiled() grants pilot departure clearance and returns the correct response strings', (t) => {
    const pilot = new Pilot(fmsArrivalFixture, modeControllerFixture);
    const result = pilot.clearedAsFiled();

    t.true(_isArray(result));
    t.true(result[0]);
    t.true(_isObject(result[1]));
    t.true(result[1].log === 'cleared to destination as filed');
    t.true(result[1].say === 'cleared to destination as filed');
    t.true(pilot.hasDepartureClearance);
});

/*!
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as admin from '../../lib/index';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { cmdArgs, defaultApp, nonNullApp, databaseUrl} from './setup'; // defaultApp, nonNullApp, databaseUrl
import { database, Database, DataSnapshot, EventType, ServerValue, Reference } from '../../lib/database/'; // Reference
const debug = require('./async-dump');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

chai.should();
chai.use(chaiAsPromised);

const expect = chai.expect;

const path = 'adminNodeSdkManualTest';

describe('admin.database', () => {

  before(() => {
    /* tslint:disable:no-console */
    if (!cmdArgs.updateRules) {
      console.log(chalk.yellow('    Not updating security rules. Some tests may fail.'));
      console.log(chalk.yellow('    Set the --updateRules flag to force update rules.'));
      return;
    }
    console.log(chalk.yellow('    Updating security rules to defaults.'));
    /* tslint:enable:no-console */
    const defaultRules = {
      rules : {
        '.read': 'auth != null',
        '.write': 'auth != null',
      },
    };
    return database().setRules(defaultRules);
  });

  it('admin.database() returns a database client', () => {
    const db = database();
    expect(db).to.be.instanceOf(Database);

  });

  it('admin.database.ServerValue type is defined', () => {
    const serverValue = ServerValue;
    expect(serverValue).to.not.be.null;
  });

  it('default App is not blocked by security rules', () => {
    return database(defaultApp).ref('blocked').set(ServerValue.TIMESTAMP)
      .should.eventually.be.fulfilled;
  });

  it('App with non-null auth override is not blocked by security rules', () => {
    return database(nonNullApp).ref('blocked').set(ServerValue.TIMESTAMP)
      .should.eventually.be.fulfilled;
  });

  interface DatabaseRecord {
      success: boolean;
      timestamp: string;
  }

  describe('admin.database().ref()', () => {
    let ref: Reference;

    before(() => {
      ref = database().ref(path);
    });

    it('ref() can be called with ref', () => {
      const copy = database().ref(ref);
      expect(copy).to.be.instanceof(Reference);
      expect(copy.key).to.equal(ref.key);
    });

    it('set() completes successfully', () => {
      return ref.set({
        success: true,
        timestamp: ServerValue.TIMESTAMP,
      }).should.eventually.be.fulfilled;
    });

    it('once() returns the current value of the reference', () => {
      return ref.once('value')
        .then((snapshot) => {
          const value: DatabaseRecord = snapshot.val() as DatabaseRecord;
          expect(value.success).to.be.true;
          expect(typeof value.timestamp).to.equal('number');
        });
    });

    it('child().once() returns the current value of the child', () => {
      return ref.child('timestamp').once('value')
        .then((snapshot) => {
          expect(typeof snapshot.val()).to.equal('number');
        });
    });

    it('remove() completes successfully', () => {
      return ref.remove().should.eventually.be.fulfilled;
    });
  });
 
  describe('app.database(url).ref()', () => {

    let refWithUrl: Reference;

    before(() => {
      const app = admin.app();
      refWithUrl = database(app, databaseUrl).ref(path);
    });

    it('app.database(url) returns a Database client for URL', () => {
      const db = database(undefined, databaseUrl);
      expect(db).to.be.instanceOf((Database));
    });

    it('set() completes successfully', () => {
      return refWithUrl.set({
        success: true,
        timestamp: ServerValue.TIMESTAMP,
      }).should.eventually.be.fulfilled;
    });

    it('once() returns the current value of the reference', () => {
      return refWithUrl.once('value')
        .then((snapshot) => {
          const value: DatabaseRecord = snapshot.val() as DatabaseRecord;
          expect(value.success).to.be.true;
          expect(typeof value.timestamp).to.equal('number');
        });
    });

    it('child().once() returns the current value of the child', () => {
      return refWithUrl.child('timestamp').once('value')
        .then((snapshot) => {
          expect(typeof snapshot.val()).to.equal('number');
        });
    });

    it('remove() completes successfully', () => {
      return refWithUrl.remove().should.eventually.be.fulfilled;
    });
  });

  it('admin.database().getRules() returns currently defined rules as a string', () => {
    return database().getRules().then((result) => {
      return expect(result).to.be.not.empty;
    });
  });

  it('admin.database().getRulesJSON() returns currently defined rules as an object', () => {
    return database().getRulesJSON().then((result) => {
      return expect(result).to.be.not.undefined;
    });
  });

  after(() => {
    setTimeout(() => {
      debug.debug();
    }, 2000);
  });

});

// Check for type compilation. This method is not invoked by any tests. But it
// will trigger a TS compilation failure if the RTDB typings were not loaded
// correctly. (Marked as export to avoid compilation warning.)
//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function addValueEventListener(
  db: Database,
  callback: (s: DataSnapshot | null) => any): void {
  const eventType: EventType = 'value';
  db.ref().on(eventType, callback);
} 
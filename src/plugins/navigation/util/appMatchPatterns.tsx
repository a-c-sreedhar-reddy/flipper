/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

import fs from 'fs';
import path from 'path';

import {AppMatchPattern} from '../types';

const extractAppNameFromSelectedApp = (selectedApp: string | null) => {
  if (selectedApp == null) {
    return null;
  } else {
    return selectedApp.split('#')[0];
  }
};

export const getAppMatchPatterns = (selectedApp: string | null) => {
  return new Promise<Array<AppMatchPattern>>((resolve, reject) => {
    const appName = extractAppNameFromSelectedApp(selectedApp);
    if (appName === 'Facebook') {
      const patternsPath = path.join(
        'facebook',
        'facebook-match-patterns.json',
      );
      fs.readFile(patternsPath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data.toString()));
        }
      });
    } else if (appName != null) {
      reject(new Error('No rule for app ' + appName));
    } else {
      reject(new Error('selectedApp was null'));
    }
  });
};

/**
 * Copyright (c) Garuda Labs, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as TypesLegacy from 'hyperview/src/types-legacy';
import React, { createContext } from 'react';

type Props = { children: React.ReactNode };

/**
 * Context used to store runtime information about the navigator and urls
 * Each navigator creates its own context
 * Urls defined in <nav-route> elements are stored in the routeMap by their key
 */
export const NavigatorMapContext = createContext<{
  routeMap?: Map<string, string>;
  elementMap?: Map<string, TypesLegacy.Element>;
  initialRouteName?: string;
}>({});

/**
 * Encapsulated context provider
 */
export function NavigatorMapProvider(props: Props) {
  const routeMap: Map<string, string> = new Map();
  const elementMap: Map<string, TypesLegacy.Element> = new Map();
  return (
    <NavigatorMapContext.Provider value={{ elementMap, routeMap }}>
      {props.children}
    </NavigatorMapContext.Provider>
  );
}
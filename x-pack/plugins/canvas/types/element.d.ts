/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

declare interface CanvasElementConfig {
  name: string;
<<<<<<< HEAD
  image: any;
=======
  image: string;
>>>>>>> b7d94df08a0e06b261a8c22a0d741ae0f13aa085
  expression: string;
  displayName?: string;
  help?: string;
  filter?: string;
  width?: number;
  height?: number;
}

declare type CanvasElement = () => CanvasElementConfig;

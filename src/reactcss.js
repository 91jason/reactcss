'use strict'

import objectAssign from 'object-assign'

import flattenNames from './flattenNames'
import mergeClasses from './mergeClasses'
import autoprefix from './autoprefix'

import Component from './deprecated/Component'
import hover from './components/hover'
import handleHover from './components/hover'
import handleActive from './components/active'
import loop from './loop'
export {Component,hover,handleHover,handleActive,loop};
export const ReactCSS = (classes, ...activations) => {
  const activeNames = flattenNames(activations)
  const merged = mergeClasses(classes, activeNames)
  return autoprefix(merged)
}

ReactCSS.m = objectAssign

export default ReactCSS

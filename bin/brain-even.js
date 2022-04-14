#!/usr/bin/env node
import { gameType } from '../src/constants.js';
import playGame from '../src/index.js';

playGame(gameType.BRAIN_EVEN);

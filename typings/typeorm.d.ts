// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import { Repository, Connection, TreeRepository } from 'typeorm';
import AppEntityUser from '../app/entity/User';
declare module 'egg' {
  interface Context {
    entity: {
      User: typeof AppEntityUser
      default: {
        User: typeof AppEntityUser
      }
    }
    repo: {
      User: Repository<AppEntityUser>
      default: {
        User: Repository<AppEntityUser>
      }
    }
  }
}
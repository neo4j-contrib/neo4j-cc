import { Ninja } from '../../model';
import './ninja-status.module.scss';

import {ThumbUpIcon} from '@heroicons/react/outline'

import ninjaImage from '../resources/ninja-dab.png'

export interface NinjaStatusProps {
  /** The user for whom status will be shown. */
  ninja: Ninja,
  /** Number of recorded activities. */
  activityCount: number
}

/**
 * Custom cell in the NinjaTable for displaying Ninja status
 * and activity count. 
 * 
 * If there is any activity, shows the "active" icon.
 * 
 * If there is activity _and_ the user is a Ninja, shows the "ninja" icon.
 * 
 */
export function NinjaStatus({ninja, activityCount}:NinjaStatusProps) {

  const NinjaBadge = () => { return ninja.isNinja 
    ? <img className="inline w-6 h-6" src={ninjaImage} alt={ninja.user} width="20px" height="20px" style={{display: "inline"}}/> 
    : <ThumbUpIcon className="inline h-6 w-6"/>
  }

  return (<div className="w-8 h-8">
      { (activityCount > 0)
           ? (<><NinjaBadge /><sup>{activityCount}</sup></>)
          : null
      }
      </div>)
}
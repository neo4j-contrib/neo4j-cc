import {CcAppSidebar} from '../cc-app-sidebar/cc-app-sidebar'
import {CcWorkspace} from '../cc-workspace/cc-workspace'


export function CcAppLayout() {

  return (
    <div className="CcAppLayout">
      <CcAppSidebar />
      <div className="md:pl-64 flex flex-col flex-1">
        <CcWorkspace>
          <p>Workspace</p>
        </CcWorkspace>
      </div>
    </div>
  )
}

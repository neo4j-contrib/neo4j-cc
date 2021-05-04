import { SummaryPanel } from '../components/SummaryPanel';

export const HomePage = () => {

  return (
    <div className="flex flex-col space-y-4">
      <SummaryPanel title="Home">
          <p className="mt-1 text-sm text-gray-600">
            Welcome home.
          </p>
      </SummaryPanel>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          Hello.
        </div>
      </div>

    </div>

  )
}

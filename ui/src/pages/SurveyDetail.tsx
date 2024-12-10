import { Chart } from 'primereact/chart';
import { TabPanel, TabView } from 'primereact/tabview';

const SurveyDetail = () => {
  return (
    <div className="card w-3/4 mx-auto mt-10">
      <div className="border mt-10">
        <Track />
        {/* <TabView>
          <TabPanel header="Track">
          </TabPanel>
          <TabPanel header="Responses">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel header="Action items">
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView> */}
      </div>
    </div>
  );
};

const Track = () => {
  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  };
  const data = {
    labels: ['Pending', 'Opened', 'Responded'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ['#32AD5B', '#FBC760', '#D9534F'],
        hoverBackgroundColor: [],
      },
    ],
  };
  return (
    <div className="flex border rounded-lg p-5">
      <div className="w-1/4">
        <div className="flex justify-center items-center p-5">
          <Chart
            type="doughnut"
            data={data}
            options={options}
            className="w-full md:w-30rem"
          />
        </div>
      </div>
      <div className="w-3/4 border-l">
        <div className="flex rounded-md p-5 border-b">
          <div className="w-1/3 text-center border-r">
            <p>Total</p>
            <p className="font-light text-2xl">32</p>
          </div>
          <div className="w-1/3 text-center border-r">
            <p>Opened</p>
            <p className="font-light text-2xl">23</p>
          </div>
          <div className="w-1/3 text-center border-r">
            <p>Responed</p>
            <p className="font-light text-2xl">20</p>
          </div>
          <div className="w-1/3 text-center">
            <p>Avg estimated time</p>
            <p className="font-light text-2xl">23s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetail;

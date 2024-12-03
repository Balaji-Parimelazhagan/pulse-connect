import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { camelCaseToText } from "../utils/common";

const Table = ({
  data,
  header,
  createLabel,
  createAction,
}: {
  data: any;
  header: string;
  createLabel?: string;
  createAction?: VoidFunction;
}) => {
  return (
    <>
      <div className="flex justify-between my-4">
        <div className="font-bold text-xl">{header}</div>
        <div>
          {createLabel && (
            <Button
              label={createLabel}
              className="bg-green-400 text-white p-1 px-1.5 rounded-none"
              onClick={createAction}
            />
          )}
        </div>
      </div>
      {!!data?.length ? (
        <DataTable value={data} className="text-sm max-h-64 border">
          {Object?.keys(data[0])?.map((field) => (
            <Column key={field} field={field} header={camelCaseToText(field)} />
          ))}
        </DataTable>
      ) : (
        <DataTable
          value={data}
          className="text-sm max-h-64 border"
          emptyMessage={
            <div className="text-center py-6 text-gray-600">
              No Data Available
            </div>
          }
        />
      )}
    </>
  );
};

export default Table;

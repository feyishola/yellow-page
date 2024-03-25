
'use client';

import { Table, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PageNotFound } from '../../404page';

function TableComponent() {

  const [data, setData] = useState(true)

  return (
    <div className="overflow-x-auto shadow-md">
      {data == null ? <PageNotFound/> :
      <Table striped>
        <Table.Head className="text-xs font-bold text-cyan-800 uppercase bg-gray-800 dark:bg-gray-900 dark:text-gray-400">
        <Table.HeadCell>Full Name</Table.HeadCell>
          <Table.HeadCell>Skills</Table.HeadCell>
          <Table.HeadCell>Lga</Table.HeadCell>
          <Table.HeadCell>Phone Number</Table.HeadCell>
          <Table.HeadCell>
            Ward
          </Table.HeadCell>
          <Table.HeadCell className='text-center'>
            Actions
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'John Doe'}
            </Table.Cell>
            <Table.Cell>Shoe making</Table.Cell>
            <Table.Cell>Lga 1</Table.Cell>
            <Table.Cell>09087654321</Table.Cell>
            <Table.Cell>
              Ward 1
            </Table.Cell>
            <Table.Cell className='text-center'>
              <Link to={"/locateuser"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Locate</button>
              </Link>
              <Link to={"/contact"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact</button>
              </Link>
        </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Jane Doe
            </Table.Cell>
            <Table.Cell>Shoe making</Table.Cell>
            <Table.Cell>Lga 1</Table.Cell>
            <Table.Cell>09087654322</Table.Cell>
            <Table.Cell>
             Ward 1
            </Table.Cell>
            <Table.Cell className='text-center'>
            <Link to={"/locateuser"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Locate</button>
              </Link>
              <Link to={"/contact"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact</button>
              </Link>
        </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Gost David</Table.Cell>
            <Table.Cell>Shoe making</Table.Cell>
            <Table.Cell>Lga 1</Table.Cell>
            <Table.Cell>09087654323</Table.Cell>
            <Table.Cell>
              Ward 1
            </Table.Cell>
            <Table.Cell className='text-center'>
            <Link to={"/locateuser"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Locate</button>
              </Link>
              <Link to={"/contact"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact</button>
              </Link>
        </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Idris Elba
            </Table.Cell>
            <Table.Cell>Shoe making</Table.Cell>
            <Table.Cell>Lga 1</Table.Cell>
            <Table.Cell>09087654324</Table.Cell>
            <Table.Cell>
              Ward 1
            </Table.Cell>
            <Table.Cell className='text-center'>
            <Link to={"/locateuser"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Locate</button>
              </Link>
              <Link to={"/contact"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact</button>
              </Link>
        </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Idi Amin</Table.Cell>
            <Table.Cell>Shoe making</Table.Cell>
            <Table.Cell>Lga 1</Table.Cell>
            <Table.Cell>09087654325</Table.Cell>
            <Table.Cell>
              Ward 1
            </Table.Cell>
            <Table.Cell className='text-center'>
            <Link to={"/locateuser"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Locate</button>
              </Link>
              <Link to={"/contact"}>
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact</button>
              </Link>
        </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
}
    </div>
  );
}
export default TableComponent;
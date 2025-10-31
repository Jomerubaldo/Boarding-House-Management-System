// Mga import para sa mga icon na gagamitin sa dashboard
import { IoTime } from 'react-icons/io5';
import { FaSackDollar } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
// Import ng React hooks
import { useState } from 'react';
// Import ng SweetAlert2 para sa magagandang alert box
import Swal from 'sweetalert2';

// Main Component ng Dashboard
export default function Dashboard() {
  const [boarders, setBoarders] = useState([]);

  // State para sa visibility ng modal (true = makikita, false = nakatago)
  const [showModal, setShowModal] = useState(false);

  // State para sa ID ng boarder na in-eedit
  const [editingId, setEditingId] = useState(null);

  // State para sa temporary data habang nag-eedit
  const [editData, setEditData] = useState({});

  //State para sa form data kapag nag-a-add ng bagong boarder
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    room: '',
  });

  // Total rooms sa boarding house
  const totalRooms = 7;

  // Total ng mga current boarders
  const occupied = boarders.length;

  // Total available rooms
  const available = totalRooms - occupied;

  const openModal = () => {
    // check kapag zero na ang available na rooms
    if (available === 0) {
      Swal.fire({
        title: 'Room is Full!',
        icon: 'warning',
      });
      return; // Balik lang sa condition para e check ulit
    }
    setShowModal(true); //kung available pa ang room mabubuksan ang modal
  };

  // Function para i-close ang modal at i-reset ang form
  const closeModal = () => {
    setShowModal(false);
    setFormData({ firstName: '', lastName: '', room: '' });
  };

  // Function para sa pag-handle ng pagbabago sa form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData, // spread operator para di mabura yung ibang fields
      [e.target.name]: e.target.value, // i-update lang yung field na binago
    });
  };

  // Function kapag nag-submit ng form (Add Boarder)
  const handleSubmit = (e) => {
    e.preventDefault(); // para hindi mag-refresh ang page

    // Validate kung may laman lahat
    if (!formData.firstName || !formData.lastName || !formData.room) {
      alert('Please fill out all fields!');

      return;
    }

    // Validation: bawal ulitin ang room number
    if (boarders.some((b) => b.room === formData.room)) {
      Swal.fire({
        title: 'Room already occupied',
        icon: 'warning',
      });
      return;
    }

    // Gumawa ng bagong boarder object
    const newBoarder = {
      id: Date.now(), // unique ID base sa current time
      firstName: formData.firstName,
      lastName: formData.lastName,
      room: formData.room,
      dateEntered: new Date().toLocaleDateString(), //Date now
    };

    // Idagdag sa listahan ng boarders
    setBoarders([...boarders, newBoarder]);
    closeModal(); // Isara ang modal

    // after add boarder show modal boarder added successfully
    Swal.fire({
      icon: 'success',
      title: 'Boarder Added Successfully',
    });
  };

  // Function para burahin ang boarder gamit ang ID
  const handleDelete = (id) => {
    setBoarders(boarders.filter((boarder) => boarder.id !== id)); //Remove to the list
    Swal.fire({
      icon: 'success',
      title: 'Boarder Deleted!',
    });
  };

  // Function para simulan ang pag-edit ng boarder
  const handleEdit = (boarder) => {
    setEditingId(boarder.id); // itago kung sino ang in-eedit
    setEditData({ ...boarder }); // gumawa ng temporary copy ng data
  };

  // Function para sa pag-handle ng pagbabago habang nag-eedit
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Function para i-save ang inedit na data
  const handleSaveEdit = () => {
    setBoarders(
      boarders.map((boarder) => (boarder.id === editingId ? editData : boarder))
    );

    setEditingId(null);
    setEditData({});
    Swal.fire({
      icon: 'success',
      title: 'Boarder Updated Successfully!',
    });
  };

  // Function para i-cancel ang edit mode
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData({}); // throw away the temporary copy
  };

  return (
    <div className="bg-[#e5e7eb] w-full h-screen">
      {/* Header section */}
      <div className="p-4 pl-9">
        <div className="flex justify-between">
          <h2 className="text-3xl pb-5 font-bold">Dashboard</h2>

          {/* Add Boarder Button at Modal */}
          <div className="mr-8">
            <button
              onClick={openModal}
              className="bg-blue-500  hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              + Add Boarder
            </button>
            {/* Modal - lalabas lang kapag showModal = true */}
            {showModal && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-1000">
                <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Add New Boarder</h2>

                  {/* Form sa loob ng modal */}
                  <form onSubmit={handleSubmit}>
                    {/* Input para sa First Name */}
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full mb-3 p-2 border border-gray-300 rounded"
                    />

                    {/* Input para sa Last Name */}
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />

                    {/* Input para sa Room Number */}
                    <input
                      name="room"
                      type="number"
                      placeholder="Enter room number (1-7)"
                      value={formData.room}
                      onChange={handleChange}
                      required
                      min="1"
                      max="7"
                      className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />

                    {/* Mga button sa modal */}
                    <div className="flex gap-3">
                      <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Mga Box sa Dashboard */}
        <div className="grid grid-cols-3 gap-y-8 grid-rows-2">
          <div className="bg-[rgb(219,234,254)] hover:bg-blue-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Total Rooms</p>
              <div className="flex justify-between">
                <p className="text-5xl text-blue-500 font-bold">{totalRooms}</p>
                <div className="text-5xl">
                  <IoHome />
                </div>
              </div>
            </div>
          </div>

          {/* Box Total Boarders */}
          <div className="bg-[rgb(254,226,226)] hover:bg-red-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Total Boarders</p>
              <div className="flex justify-between">
                <p className="text-5xl text-red-500 font-bold">{occupied}</p>
                <div className="text-5xl">
                  <FaUserFriends />
                </div>
              </div>
            </div>
          </div>

          {/* Box Occupied Rooms */}
          <div className="bg-[rgb(209,250,229)] w-[400px] hover:bg-green-200 h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Occupied Rooms</p>
              <div className="flex justify-between">
                <p className="text-5xl text-green-500 font-bold">{occupied}</p>
                <div className="text-5xl">
                  <FaHome />
                </div>
              </div>
            </div>
          </div>

          {/* Box Available Rooms */}
          <div className="bg-[rgb(254,243,199)] hover:bg-yellow-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Available Rooms</p>
              <div className="flex justify-between">
                <p className="text-5xl text-yellow-500 font-bold">
                  {available}
                </p>
                <div className="text-5xl">
                  <IoHomeSharp />
                </div>
              </div>
            </div>
          </div>

          {/* Box Monthly Income */}
          <div className="bg-[rgb(237,233,254)] hover:bg-violet-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Monthly Income</p>
              <div className="flex justify-between">
                <p className="text-5xl text-violet-500 font-bold">₱14,000</p>
                <div className="text-5xl">
                  <FaSackDollar />
                </div>
              </div>
            </div>
          </div>

          {/* Box Pending Payments*/}
          <div className="bg-[rgb(252,231,243)] hover:bg-pink-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Pending Payments</p>
              <div className="flex justify-between">
                <p className="text-5xl text-pink-500 font-bold">2</p>
                <div className="text-5xl">
                  <IoTime />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Section (Table ng mga boarders) */}
        <h2 className="text-3xl font-bold pt-5">History</h2>
        <div className="bg-white w-[1265px] h-[200px] mt-6 rounded-lg shadow-xl">
          <div className="p-4 pl-6">
            {/* Table */}
            <div>
              <table>
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">First Name</th>
                    <th className="px-6 py-3 text-left">Last Name</th>
                    <th className="px-6 py-3 text-left">Room Number</th>
                    <th className="px-6 py-3 text-left">Date Entered</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {boarders.map((boarder, index) => (
                    <tr key={boarder.id}>
                      <td className="px-6 py-4">{index + 1}</td>
                      {/* Kung in-eedit, papalitan ng input fields */}
                      {editingId === boarder.id ? (
                        <>
                          <td className="px-6 py-4">
                            <input
                              name="firstName"
                              type="text"
                              value={editData.firstName}
                              onChange={handleEditChange}
                              className="w-full p-1 border border-gray-300 rounded"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <input
                              name="lastName"
                              type="text"
                              value={editData.lastName}
                              onChange={handleEditChange}
                              className="w-full p-1 border border-gray-300 rounded"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <input
                              name="room"
                              type="number"
                              value={editData.room}
                              onChange={handleEditChange}
                              min="1"
                              max="7"
                              className="w-full p-1 border border-gray-300 rounded"
                            />
                          </td>
                          <td className="px-6 py-4">{boarder.dateEntered}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={handleSaveEdit}
                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                              >
                                Cancel
                              </button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          {/* Normal display kapag hindi nag-eedit */}
                          <td className="px-6 py-4">{boarder.firstName}</td>
                          <td className="px-6 py-4">{boarder.lastName}</td>
                          <td className="px-6 py-4">{boarder.room}</td>
                          <td className="px-6 py-4">{boarder.dateEntered}</td>
                          <td className="px-6 py-4">
                            {/* x */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEdit(boarder)}
                                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(boarder.id)}
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

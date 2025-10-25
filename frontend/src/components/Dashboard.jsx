import { useState } from 'react';

export default function Dashboard() {
  //Function to dashboard
  const [boarders, setBoarders] = useState([]);

  //Calculate Stats
  const totalRooms = 7;
  const occupied = boarders.length;
  const available = totalRooms - occupied;

  //Modal Box
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    room: '',
  });

  const openModal = () => setShowModal(true);

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', room: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new boarder to state
    const newBoarder = {
      id: Date.now(),
      name: formData.name,
      room: formData.room,
    };

    // Dashboard updates automatically
    setBoarders([...boarders, newBoarder]);
    closeModal();
  };

  return (
    <div className="bg-[#e5e7eb] w-full h-screen">
      <div className="p-4 pl-9">
        <div className="flex justify-between">
          <h2 className="text-3xl pb-5 font-bold">Dashboard</h2>

          {/* Add Boarder Button */}
          <div className="mr-8">
            <button
              onClick={openModal}
              className="bg-blue-500  hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              + Add Boarder
            </button>
            {showModal && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-1000">
                <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Add New Boarder</h2>

                  {/* Form for Add Boarder */}
                  <form onSubmit={handleSubmit}>
                    <input
                      name="name"
                      type="text"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full mb-3 p-2 border border-gray-300 rounded"
                    />
                    <input
                      name="room"
                      type="text"
                      placeholder="Room Number"
                      value={formData.room}
                      onChange={handleChange}
                      required
                      className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                    <div className="flex gap-3">
                      <button
                        type="submit"
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

        {/* Dashboard Boxes */}
        {/* Box Total Rooms */}
        <div className="grid grid-cols-3 gap-y-8 grid-rows-2">
          <div className="bg-[rgb(219,234,254)] hover:bg-blue-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Total Rooms</p>
              <div className="flex justify-between">
                <p className="text-5xl text-blue-500 font-bold">{totalRooms}</p>
                <div className="text-5xl">🏡</div>
              </div>
            </div>
          </div>

          {/* Box Total Boarders */}
          <div className="bg-[rgb(254,226,226)] hover:bg-red-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Total Boarders</p>
              <div className="flex justify-between">
                <p className="text-5xl text-red-500 font-bold">{occupied}</p>
                <div className="text-5xl">👥</div>
              </div>
            </div>
          </div>

          {/* Box Occupied Rooms */}
          <div className="bg-[rgb(209,250,229)] w-[400px] hover:bg-green-200 h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Occupied Rooms</p>
              <div className="flex justify-between">
                <p className="text-5xl text-green-500 font-bold">{occupied}</p>
                <div className="text-5xl">🏚️</div>
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
                <div className="text-5xl">🏠</div>
              </div>
            </div>
          </div>

          {/* Box Monthly Income */}
          <div className="bg-[rgb(237,233,254)] hover:bg-violet-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Monthly Income</p>
              <div className="flex justify-between">
                <p className="text-5xl text-violet-500 font-bold">₱14,000</p>
                <div className="text-5xl">💰</div>
              </div>
            </div>
          </div>

          {/* Box 6Pending Payments*/}
          <div className="bg-[rgb(252,231,243)] hover:bg-pink-200 w-[400px] h-40 rounded-lg shadow-xl">
            <div className="p-6 space-y-5">
              <p className="text-2xl">Pending Payments</p>
              <div className="flex justify-between">
                <p className="text-5xl text-pink-500 font-bold">2</p>
                <div className="text-5xl">⏳</div>
              </div>
            </div>
          </div>
        </div>

        {/* History Payments */}
        <h2 className="text-3xl font-bold pt-5">History</h2>
        <div className="bg-white w-[1265px] h-[200px] mt-6 rounded-lg shadow-xl">
          <div className="p-4 pl-6"></div>
        </div>
      </div>
    </div>
  );
}

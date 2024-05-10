const Doctor = require('../Models/Doctor.model');

exports.createUser = async (req, res) => {
    try {
        const user = new Doctor(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await Doctor.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await Doctor.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateUser = async (req, res) => {
    // try {
    //     const user = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    //     if (!user) {
    //         return res.status(404).send();
    //     }
    //     res.send(user);
    // } catch (error) {
    //     res.status(400).send(error);
    // }
    const id = req.params.id;
    try {
        const user = await Doctor.findOneAndDelete({ _id: id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await Doctor.findOneAndDelete({ _id: id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.patchUsers = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send({ message: "Invalid request: No ID provided." });
    }
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: { isVerified: true } },
            { new: true, runValidators: true }
        );
        if (!updatedDoctor) {
            return res.status(404).json({ message: 'No doctor found with that ID' });
        }
        res.json({
            message: 'Doctor verified successfully',
            doctor: updatedDoctor
        });
    } catch (error) {
        console.error('Error during verification and fetch:', error);
        res.status(500).send({ message: 'Failed to verify and fetch doctor', error: error.message });
    }
};
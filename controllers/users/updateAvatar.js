const { User } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.files;
    const { _id: id } = req.user;
    const imageName = `${id}_${originalname}`;

    try {
        const resultUpload = path.join(avatarDir, imageName);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join('public', 'avatars', imageName);
        Jimp.read(avatarURL).then((avatar) => {
            return avatar.resize(250, 250).write(avatarURL);
        });

        await User.findByIdAndUpdate(req.user._id, { avatarURL });
        res.json({ avatarURL });
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }
};

module.exports = updateAvatar;
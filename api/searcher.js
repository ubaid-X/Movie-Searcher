export default async function handler(req, res) {
    const { keyword } = req.query;

    if (!keyword) {
        return res.status(400).json({ message: "Movie name is required" });
    }

    const apikey = process.env.MOVIESEARCHER_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${encodeURIComponent(keyword)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        req.status(200).json(data);
    } catch (error) {
        res.status(500).json({ massage: "Server error, please try again" });
    }
}
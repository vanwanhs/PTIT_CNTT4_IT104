const groupAnagrams = (words) => {
    const map = new Map();

    words.forEach(word => {
        const key = word.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    });

    return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

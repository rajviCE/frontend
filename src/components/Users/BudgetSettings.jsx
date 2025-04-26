import { useState, useEffect } from "react";

const BudgetSettings = ({ userId }) => {
    const [allocationPreference, setAllocationPreference] = useState("next_month");

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/${userId}`)
            .then(res => res.json())
            .then(data => setAllocationPreference(data.allocationPreference || "next_month"));
    }, [userId]);

    const handleSave = async () => {
        const response = await fetch(`http://localhost:5000/api/user/${userId}/allocation-preference`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ allocationPreference }),
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <div>
            <h2>Budget Allocation Preference</h2>
            <select value={allocationPreference} onChange={(e) => setAllocationPreference(e.target.value)}>
                <option value="next_month">Carry Forward</option>
                <option value="family_goal">Allocate to Family Goal</option>
            </select>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default BudgetSettings;

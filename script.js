document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple login simulation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Hide the login form and show the content
        document.getElementById('guestLogin').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        
        // Load the data
        loadFacultyData();
        loadPublicationsData();
    }
});

function loadFacultyData() {
    const facultyData = [
        { id: 1, name: 'John Doe', department: 'Computer Science' },
        { id: 2, name: 'Jane Smith', department: 'Physics' },
    ];

    const facultyTableBody = document.querySelector('#facultyTable tbody');
    facultyData.forEach(faculty => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${faculty.id}</td>
            <td>${faculty.name}</td>
            <td>${faculty.department}</td>
        `;
        facultyTableBody.appendChild(row);
    });
}

function loadPublicationsData() {
    const publicationsData = [
        { id: 1, faculty_id: 1, title: 'A Study on AI', year: 2023, type: 'Journal', doi: '10.1234/abcde', source: 'Journal of AI' },
        { id: 2, faculty_id: 2, title: 'Quantum Mechanics Basics', year: 2022, type: 'Conference', doi: '10.5678/fghij', source: 'Physics Conference' },
    ];

    const publicationsTableBody = document.querySelector('#publicationsTable tbody');
    publicationsData.forEach(publication => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${publication.id}</td>
            <td>${publication.faculty_id}</td>
            <td>${publication.title}</td>
            <td>${publication.year}</td>
            <td>${publication.type}</td>
            <td>${publication.doi}</td>
            <td>${publication.source}</td>
        `;
        publicationsTableBody.appendChild(row);
    });
}
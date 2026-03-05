import initSqlJs from 'sql.js';

let db: any = null;

export const initDB = async () => {
    if (db) return db;

    const SQL = await initSqlJs({
        locateFile: file => `https://unpkg.com/sql.js@1.12.0/dist/${file}`
    });

    db = new SQL.Database();

    // Create initial schema
    db.run(`
        CREATE TABLE IF NOT EXISTS tutorials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT,
            level TEXT,
            time TEXT,
            icon TEXT
        );
        
        CREATE TABLE IF NOT EXISTS analytics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    // Seed initial data if empty
    const res = db.exec("SELECT count(*) FROM tutorials");
    if (res[0].values[0][0] === 0) {
        db.run(`
            INSERT INTO tutorials (title, description, level, time, icon) VALUES 
            ('Instalação via Script', 'Rode o picoclaw em segundos com o instalador automático.', 'Iniciante', '3 min', 'Download'),
            ('Configuração de Adaptadores', 'Conecte sua API Key da OpenAI, Anthropic ou DeepSeek.', 'Iniciante', '5 min', 'Key'),
            ('Primeiro Agente', 'Crie um bot básico para responder mensagens via terminal.', 'Iniciante', '7 min', 'MessagesSquare')
        `);
    }

    return db;
};

export const getTutorials = () => {
    if (!db) return [];
    const res = db.exec("SELECT * FROM tutorials");
    if (res.length === 0) return [];

    return res[0].values.map((row: any) => ({
        id: row[0],
        title: row[1],
        description: row[2],
        level: row[3],
        time: row[4],
        icon: row[5]
    }));
};

export const addTutorial = (tutorial: any) => {
    if (!db) return;
    db.run("INSERT INTO tutorials (title, description, level, time, icon) VALUES (?, ?, ?, ?, ?)",
        [tutorial.title, tutorial.description, tutorial.level, tutorial.time, tutorial.icon]);
};

export const deleteTutorial = (id: number) => {
    if (!db) return;
    db.run("DELETE FROM tutorials WHERE id = ?", [id]);
};

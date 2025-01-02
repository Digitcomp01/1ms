// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelector('.cont-kembali').addEventListener('click', function() {
    window.location.href = 'https://digitcomp01.github.io/1ms/pokeleague.html';
});

function updateText() {
    const output = document.getElementById('output');
    const selectedValue = document.getElementById('options').value;

    // Define tables as HTML strings
    const tables = {
        text1: `
            <table><thead><tr><th rowspan="2">Rank</th><th rowspan="2">Trainer Name</th><th rowspan="2">Trainer ID</th><th rowspan="2">Region</th><th colspan="2">Record</th></tr><tr><th>Win</th><th>Lose</th></tr></thead><tbody><tr><td>1</td><td>Peyeum</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>2</td><td>Alice</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>3</td><td>neiichiro</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>4</td><td>7ʟ.</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>5</td><td>Azureleaa</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>6</td><td>Dash</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>7</td><td>Pish</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>8</td><td>Wisnuwy</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>9</td><td>JOJO</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>10</td><td>KHONTOL</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>11</td><td>bross</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>12</td><td>ユタ</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>13</td><td>Minerva</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>14</td><td>V<3D</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>15</td><td>V</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>16</td><td>Lcious</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>17</td><td>Pocket</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>18</td><td>nofal</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>19</td><td>Nemooo</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr><tr><td>20</td><td>Natori</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>21</td><td>Deluvroses</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>22</td><td>Toshiyuki</td><td>0</td><td>JOHTO</td><td>0</td><td>0</td></tr><tr><td>23</td><td>Clowzle</td><td>0</td><td>KANTO</td><td>0</td><td>0</td></tr><tr><td>24</td><td>Blackmumba. Id</td><td>0</td><td>HOEN</td><td>0</td><td>0</td></tr></tbody></table>
        `,
        text2: `
            <table>
		        <thead>
		            <tr>
		                <th rowspan="2">Rank</th>
		                <th rowspan="2">Trainer Name</th>
		                <th rowspan="2">Play</th>
		                <th rowspan="2">Win</th>
		                <th rowspan="2">Lose</th>
		                <th rowspan="2">W/L Round</th>
		                <th rowspan="2">Total Poin</th>
		            </tr>
		        </thead>
		        <tbody>
		            <tr>
				        <td>1</td>
				        <td>Azureleaa</td>
				        <td>7</td>
				        <td>6</td>
				        <td>1</td>
				        <td>8</td>
				        <td>18</td>
				    </tr>
				    <tr>
				        <td>2</td>
				        <td>Dash</td>
				        <td>7</td>
				        <td>6</td>
				        <td>1</td>
				        <td>7</td>
				        <td>18</td>
				    </tr>
				    <tr>
				        <td>3</td>
				        <td>Wisnuwy</td>
				        <td>7</td>
				        <td>4</td>
				        <td>3</td>
				        <td>3</td>
				        <td>12</td>
				    </tr>
				    <tr>
				        <td>4</td>
				        <td>7ʟ.</td>
				        <td>7</td>
				        <td>4</td>
				        <td>3</td>
				        <td>1</td>
				        <td>12</td>
				    </tr>
				    <tr>
				        <td>5</td>
				        <td>V&lt;3D</td>
				        <td>7</td>
				        <td>3</td>
				        <td>4</td>
				        <td>0</td>
				        <td>9</td>
				    </tr>
				    <tr>
				        <td>6</td>
				        <td>Lcious</td>
				        <td>7</td>
				        <td>3</td>
				        <td>4</td>
				        <td>-2</td>
				        <td>9</td>
				    </tr>
				    <tr>
				        <td>7</td>
				        <td>Natori</td>
				        <td>7</td>
				        <td>2</td>
				        <td>5</td>
				        <td>-6</td>
				        <td>6</td>
				    </tr>
				    <tr>
				        <td>8</td>
				        <td>Clowzle</td>
				        <td>7</td>
				        <td>0</td>
				        <td>7</td>
				        <td>-11</td>
				        <td>0</td>
				    </tr>
		        </tbody>
		    </table>
        `,
        text3: `
            <table>
		        <thead>
		            <tr>
		                <th rowspan="2">Rank</th>
		                <th rowspan="2">Trainer Name</th>
		                <th rowspan="2">Play</th>
		                <th rowspan="2">Win</th>
		                <th rowspan="2">Lose</th>
		                <th rowspan="2">W/L Round</th>
		                <th rowspan="2">Total Poin</th>
		            </tr>
		        </thead>
		        <tbody>
		            <tr>
				        <td>1</td>
				        <td>Alice</td>
				        <td>7</td>
				        <td>6</td>
				        <td>1</td>
				        <td>8</td>
				        <td>18</td>
				    </tr>
				    <tr>
				        <td>2</td>
				        <td>JOJO</td>
				        <td>7</td>
				        <td>5</td>
				        <td>2</td>
				        <td>6</td>
				        <td>15</td>
				    </tr>
				    <tr>
				        <td>3</td>
				        <td>KHONTOL</td>
				        <td>7</td>
				        <td>5</td>
				        <td>2</td>
				        <td>5</td>
				        <td>15</td>
				    </tr>
				    <tr>
				        <td>4</td>
				        <td>Peyeum</td>
				        <td>7</td>
				        <td>4</td>
				        <td>3</td>
				        <td>3</td>
				        <td>12</td>
				    </tr>
				    <tr>
				        <td>5</td>
				        <td>Pocket</td>
				        <td>7</td>
				        <td>3</td>
				        <td>4</td>
				        <td>-2</td>
				        <td>9</td>
				    </tr>
				    <tr>
				        <td>6</td>
				        <td>nofal</td>
				        <td>7</td>
				        <td>3</td>
				        <td>4</td>
				        <td>-3</td>
				        <td>9</td>
				    </tr>
				    <tr>
				        <td>7</td>
				        <td>Deluvroses</td>
				        <td>7</td>
				        <td>1</td>
				        <td>6</td>
				        <td>-6</td>
				        <td>3</td>
				    </tr>
				    <tr>
				        <td>8</td>
				        <td>Toshiyuki</td>
				        <td>7</td>
				        <td>1</td>
				        <td>6</td>
				        <td>-9</td>
				        <td>3</td>
				    </tr>
		        </tbody>
		    </table>
        `,
        text4: `
            <table>
		        <thead>
		            <tr>
		                <th rowspan="2">Rank</th>
		                <th rowspan="2">Trainer Name</th>
		                <th rowspan="2">Play</th>
		                <th rowspan="2">Win</th>
		                <th rowspan="2">Lose</th>
		                <th rowspan="2">W/L Round</th>
		                <th rowspan="2">Total Poin</th>
		            </tr>
		        </thead>
		        <tbody>
		            <tr>
				        <td>1</td>
				        <td>Pish</td>
				        <td>7</td>
				        <td>5</td>
				        <td>2</td>
				        <td>5</td>
				        <td>15</td>
				    </tr>
				    <tr>
				        <td>2</td>
				        <td>ユタ</td>
				        <td>7</td>
				        <td>5</td>
				        <td>2</td>
				        <td>3</td>
				        <td>15</td>
				    </tr>
				    <tr>
				        <td>3</td>
				        <td>bross</td>
				        <td>7</td>
				        <td>4</td>
				        <td>3</td>
				        <td>4</td>
				        <td>12</td>
				    </tr>
				    <tr>
				        <td>4</td>
				        <td>neiichiro</td>
				        <td>7</td>
				        <td>4</td>
				        <td>3</td>
				        <td>2</td>
				        <td>12</td>
				    </tr>
				    <tr>
				        <td>5</td>
				        <td>Minerva</td>
				        <td>7</td>
				        <td>4</td>
				        <td>3</td>
				        <td>0</td>
				        <td>12</td>
				    </tr>
				    <tr>
				        <td>6</td>
				        <td>V</td>
				        <td>7</td>
				        <td>3</td>
				        <td>4</td>
				        <td>0</td>
				        <td>9</td>
				    </tr>
				    <tr>
				        <td>7</td>
				        <td>Nemooo</td>
				        <td>7</td>
				        <td>3</td>
				        <td>4</td>
				        <td>-3</td>
				        <td>9</td>
				    </tr>
				    <tr>
				        <td>8</td>
				        <td>Blackmumba. Id</td>
				        <td>7</td>
				        <td>0</td>
				        <td>7</td>
				        <td>-11</td>
				        <td>0</td>
				    </tr>
		        </tbody>
		    </table>
        `,
    };

    // Update the output div with the selected table or a default message
    output.innerHTML = tables[selectedValue] || `<h2>Silahkan Pilih Rank Yang Ingin Dilihat.</h2>`;
}


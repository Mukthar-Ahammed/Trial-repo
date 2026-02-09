import './BackgroundClipPath.css';
import clipRect1 from '../assets/clippath-rect-1.png';
import clipRect2 from '../assets/clippath-rect-2.png';
import clipRect3 from '../assets/clippath-rect-3.png';

function BackgroundClipPath() {

    return (
        <div className="clip-path-background">
            <div className="clip-path-group">
                <div className="clip-path-group-inner">
                    <div className="clip-path-group-mask">
                        <div
                            className="clip-path-rectangle"
                            style={{
                                maskImage: `url('${clipRect2}'), url('${clipRect3}')`,
                                WebkitMaskImage: `url('${clipRect2}'), url('${clipRect3}')`
                            }}
                        >
                            <div className="clip-path-image-wrapper">
                                <img alt="" className="clip-path-image" src={clipRect1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundClipPath;


